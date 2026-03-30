import React from "react";

export default function Input({
  state,
  type,
  placeholder,
  lable,
  expresionRegular,
  changeState,
  name,
}) {
  const onChange = (e) => {
    const val = expresionRegular
      ? e.target.value.replace(expresionRegular, "")
      : e.target.value;
    changeState(val);
  };

  return (
    <div className="field-group">
      <label className="field-label">{lable}</label>
      <input
        className="field-input"
        value={state ?? ""}
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        onKeyUp={onChange}
      />
    </div>
  );
}
