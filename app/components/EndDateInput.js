import React, { useState } from 'react';

const EndDateInput = ({setEndDateSelected, endDateSelected}
) => {

  const handleDateChange = (event) => {
    setEndDateSelected(event.target.value);
  };

  return (
    <div>
      <label htmlFor="date-input">Selecciona una fecha: </label>
      <input
        type="date"
        id="date-input"
        value={endDateSelected}
        onChange={handleDateChange}
      />
    </div>
  );
};

export default EndDateInput;
