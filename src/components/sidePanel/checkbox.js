import React, { useEffect, useState } from "react";

export default function Checkbox({
  index,
  keyValue,
  uniqueValue,
  handleInputChange,
}) {
  // used to control the checked status of the checkboxes. Mainly to reset the checkbox when a new category is pressed.
  const [checked, setChecked] = useState(false);

  // function used to set the checked state
  const settingCheck = () => {
    setChecked(!checked);
  };

  // Similar to componentDidUpdate. Reset the checkboxes when a new category is pressed.
  useEffect(() => {
    setChecked(false);
  }, [uniqueValue]);

  return (
    <input
      key={index}
      name={`${keyValue},${uniqueValue}`}
      type="checkbox"
      checked={checked}
      className="main-sidePanel-filter-checkbox"
      onChange={(e) => {
        handleInputChange(e);
        settingCheck();
      }}
    />
  );
}
