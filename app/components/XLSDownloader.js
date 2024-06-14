import React from 'react';
import ExcelJS from 'exceljs';
import { selectAPICall } from '../lib/utilities';
const XLSDownloader = ({itemtorender, startDateSelected,endDateSelected,selectedOption, fileName = 'data.xlsx' }) => {
    const handleDownload = async (e) => {
    const data = await selectAPICall(selectedOption,startDateSelected,endDateSelected,e.target.id)
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Sheet1');
    // Agregar encabezados
    const headers = Object.keys(data[0]);
    worksheet.addRow(headers);

    // Agregar filas
    data.forEach(item => {
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
    <button 
    id={itemtorender.campaign_id ? itemtorender.campaign_id : itemtorender.workflow_id ? itemtorender.workflow_id : itemtorender.asset_id ? itemtorender.asset_id : null} 
    onClick={handleDownload}>
      Download Excel
    </button>
  );
};

export default XLSDownloader;
