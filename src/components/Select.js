import React from "react";

const Select = ({ selectName, selectDefault, options }) => {
  return (
    <div className="col s6">
      <select
        defaultValue={selectDefault}
        className="browser-default"
        name={selectName}
        id={selectName}
      >
        <option value="EUR">EUR</option>
        <option value="CHF">CHF</option>
        <option value="GBP">GBP</option>
        <option value="USD">USD</option>
      </select>
    </div>
  );
};

export default Select;
