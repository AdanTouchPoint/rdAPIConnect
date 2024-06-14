import React from 'react';
import "./item-list.css";
import XLSDownloader from '../XLSDownloader';


const ItemsList = ({dataRender,setId,startDateSelected,endDateSelected,selectedOption,id,hideItems}) => {
const data = dataRender
const renderProperty = (property, value) => {
    if (typeof value === 'object' && value !== null) {
      if (Array.isArray(value)) {
        return (
          <div key={property} >
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
          <div key={property}>
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
    <div hidden={hideItems}>
      {data?.map((item, index) => (
        <div className={'item'} key={index} >
          {Object.keys(item).map((property) => (
            renderProperty(property, item[property])
          ))}
          <XLSDownloader
          itemtorender={item}
          startDateSelected={startDateSelected}
          endDateSelected={endDateSelected}
          selectedOption={selectedOption}
          />
        </div>
      ))}
    </div>
  );
};

export default ItemsList;
