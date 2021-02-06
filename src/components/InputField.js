import React from "react";

const InputField = ({ inputName, inputLabel }) => {
  return (
    <div className="input-field col s12">
      <input id={inputName} type="text" className="" value="0" />
      <span
        className="helper-text"
        data-error="Erreur"
        data-success="Valide"
      ></span>
      <label htmlFor={inputName}>{inputLabel}</label>
    </div>
  );
};

export default InputField;
