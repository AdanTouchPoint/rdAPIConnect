import React from 'react';
const OptionList = ({options,setSelectedOption}) => {
    const handleDateChange =  (event) => {
        setSelectedOption(event.target.value)
    }
    return (
        <select onChange={handleDateChange}>
          {options?.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
    );
}
export default OptionList;