import React from "react";

const FormField = (props) => {
  console.log("this is our props: ", props);
  return (
    <div className="field">
      <label className="label">{props.label}</label>
      <div className="control">
        <input
          className="input"
          type={props.type}
          placeholder={props.placeholder}
        />
      </div>
    </div>
  );
};

export default FormField;
