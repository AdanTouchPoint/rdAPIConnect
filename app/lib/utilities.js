import emailMarketing from "./apiCalls";

const selectAPICall = (selectedOption, startDateSelected, endDateSelected,setDataRender) => {
  if (selectedOption === "Email Marketing") {
    return  emailMarketing(startDateSelected, endDateSelected,setDataRender);
  }
  return console.log("Novalid");
};
const createSheet = async (data) => {
    try {
      const response = await fetch('/api/createSheet', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (response.ok) {
        console.log('Documento creado exitosamente:', result.spreadsheetId);
      } else {
        console.error('Error al crear el documento:', result.error);
      }
    } catch (error) {
      console.error('Error de red:', error);
    }
  };

export {selectAPICall, createSheet};
