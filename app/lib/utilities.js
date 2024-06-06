import emailMarketing from "./apiCalls";

const selectAPICall = (selectedOption, startDateSelected, endDateSelected,setDataRender) => {
  if (selectedOption === "Email Marketing") {
    return  emailMarketing(startDateSelected, endDateSelected,setDataRender);
  }
  return console.log("Novalid");
};


export {selectAPICall};
