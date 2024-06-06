import React from 'react';
import ExcelJS from 'exceljs';

const XLSDownloader = ({ dataRender, fileName = 'data.xlsx' }) => {
    console.log(dataRender)
    const handleDownload = async () => {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Sheet1');

    // Agregar encabezados
    const headers = Object.keys(dataRender[0]);
    worksheet.addRow(headers);

    // Agregar filas
    dataRender.forEach(item => {
      worksheet.addRow(headers.map(header => item[header]));
    });

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
    <button onClick={handleDownload}>Download Excel</button>
  );
};

export default XLSDownloader;
