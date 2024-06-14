import {emailMarketing,automationFlow,conversionAsset} from "./apiCalls";

const selectAPICall = (selectedOption, startDateSelected, endDateSelected,id) => {
  switch (selectedOption) {
    case "Email Marketing":
      return emailMarketing(startDateSelected, endDateSelected, id);
    case "Email via Automation Flow":
      return automationFlow(startDateSelected, endDateSelected, id);
    case "Conversion Assets":
      return conversionAsset(startDateSelected, endDateSelected, id);
    default:
      console.log("Invalid option selected");
      break;
  }
  return console.log("Novalid");
};


export {selectAPICall};
