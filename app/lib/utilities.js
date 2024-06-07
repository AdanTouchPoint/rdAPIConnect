import {emailMarketing,automationFlow,conversionAsset} from "./apiCalls";

const selectAPICall = (selectedOption, startDateSelected, endDateSelected,setDataRender) => {
  switch (selectedOption) {
    case "Email Marketing":
      return emailMarketing(startDateSelected, endDateSelected, setDataRender);
    case "Email via Automation Flow":
      return automationFlow(startDateSelected, endDateSelected, setDataRender);
    case "Conversion Assets":
      return conversionAsset(startDateSelected, endDateSelected, setDataRender);
    default:
      console.log("Invalid option selected");
      break;
  }
  return console.log("Novalid");
};


export {selectAPICall};
