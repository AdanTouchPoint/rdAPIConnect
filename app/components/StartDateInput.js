import React, { useState } from 'react';

const StartDateInput = ({setStartDateSelected, startDateSelected}) => {
  const handleDateChange = (event) => {
    setStartDateSelected(event.target.value);
  };
  return (
    <div>
      <label htmlFor="date-input">Selecciona una fecha: </label>
      <input
        type="date"
        id="date-input"
        value={startDateSelected}
        onChange={handleDateChange}
      />
    </div>
  );
};

export default StartDateInput;
