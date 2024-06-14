import React from 'react';

const ItemsList = (dataRender) => {
const data = dataRender.dataRender
const renderProperty = (property, value) => {
    if (typeof value === 'object' && value !== null) {
      if (Array.isArray(value)) {
        return (
          <div key={property} style={{ paddingLeft: '15px', borderLeft: '2px solid #eee' }}>
            <strong>{property}:</strong>
            {value.map((item, index) => (
              <div key={index}>
                <strong>{index}: </strong>{item.toString()}
              </div>
            ))}
          </div>
        );
      } else {
        return (
          <div key={property} style={{ paddingLeft: '15px', borderLeft: '2px solid #eee' }}>
            <strong>{property}:</strong>
            {Object.keys(value).map((subProperty) => (
              <div key={subProperty}>
                <strong>{subProperty}: </strong>{value[subProperty].toString()}
              </div>
            ))}
          </div>
        );
      }
    }
    return (
      <p key={property}>
        <strong>{property}: </strong> {value.toString()}
      </p>
    );
  };
  return (
    <div >
      {data.map((item, index) => (
        <div className='items-list' key={index} >
          {Object.keys(item).map((property) => (
            renderProperty(property, item[property])
          ))}
          <button
            onClick={() => onButtonClick(index)}
          >
            Acción
          </button>
        </div>
      ))}
    </div>
  );
};

export default ItemsList;
