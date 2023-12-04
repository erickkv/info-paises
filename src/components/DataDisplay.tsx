import React from 'react';

interface DataDisplayProps {
  data: any;
  customClassName?: string;
}

const DataDisplay: React.FC<DataDisplayProps> = ({ data, customClassName }) => {
  const countryName = data.translations.spa.common|| '';

  return (
    <div className={`country-container ${customClassName}`}>
      <div className="country-name">{countryName}</div>
      <div className="country-flag">
        <img src={data.flags.png} alt={`${countryName} flag`} />
      </div>
    </div>
  );
};

export default DataDisplay;
