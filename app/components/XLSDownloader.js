import React from 'react';
import ExcelJS from 'exceljs';
const XLSDownloader = ({itemtorender, fileName = 'data.xlsx' }) => {
    const handleDownload = async () => {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Sheet1');
    // Agregar encabezados
    console.log(itemtorender)
    const headers = Object.keys(itemtorender);
    worksheet.addRow(headers);
    // Agregar una fila con los valores correspondientes
    const row = headers.map(header => itemtorender[header]);
    worksheet.addRow(row);
    // Generar el archivo Excel y crear un blob
    const buffer = await workbook.xlsx.writeBuffer();
    const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });

    // Crear un enlace para descargar el blob
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <button
    onClick={handleDownload}>
      Download Excel
    </button>
  );
};

export default XLSDownloader;
