import React from "react";
import "./sidePanel.css";

// checkbox component
import Checkbox from "./checkbox";

export default function SidePanel({ displayedData, filterArg, setFilterArg }) {
  // obtaining all the unique keys for each entry
  let uniqueKeys = [];

  displayedData.map((each) => {
    Object.keys(each).map((key) => {
      // if the key is unique, push it to the array
      if (!uniqueKeys.includes(key)) {
        uniqueKeys.push(key);
      }
      return null;
    });
    return null;
  });

  // obtaining all the unique values for each individual key
  let uniqueValues = {};
  uniqueKeys.map((each) => {
    uniqueValues[each] = [];
    return null;
  });

  displayedData.map((each) => {
    Object.keys(each).map((key) => {
      let value = each[key];
      // if the value is unique, push it to the array
      if (!uniqueValues[key].includes(value)) {
        uniqueValues[key].push(value);
      }
      return null;
    });
    return null;
  });

  // sorting the unique values by the first element
  Object.keys(uniqueValues).map((each) => {
    uniqueValues[each].sort();
    return null;
  });

  const handleInputChange = (e) => {
    const target = e.target;
    const checked = target.checked;
    const name = target.name;

    // Filter category
    const key = name.split(",")[0];
    // Filter category value
    const value = name.split(",")[1];

    // obtaining the filter arguments from the user and pushing it up to the parent (App.js)
    const filterArgCopy = { ...filterArg };
    // if it is checked, we add the filter arguement
    if (checked) {
      if (!filterArgCopy[key]) {
        filterArgCopy[key] = [];
      }
      filterArgCopy[key].push(value);
    } else {
      // if it is not checked, we remove it from the filter arguement
      if (filterArgCopy[key].length === 1) {
        delete filterArgCopy[key];
      } else {
        let index = filterArgCopy[key].indexOf(value);
        filterArgCopy[key].splice(index, 1);
      }
    }

    setFilterArg(filterArgCopy);
  };

  return (
    <React.Fragment>
      {/* side panel */}
      <div className="main-sidePanel flex py-1">
        {/* main title */}
        <h1>
          <i className="fas fa-filter" />
          Filters
        </h1>

        {/* filter categories  */}
        {uniqueKeys.map((key, index) => {
          // remove main identifier as filter
          if (index === 0) {
            return null;
          }

          // cleaning up the title string
          let title =
            key.split("_")[0].charAt(0).toUpperCase() +
            key.split("_")[0].slice(1);

          if (key.split("_")[1]) {
            title = title + " " + key.split("_")[1];
          }
          return (
            <div key={index} className="my-1">
              <h2>{title}</h2>
              <div className="main-sidePanel-filter-values-container flex">
                {uniqueValues[key].map((uniqueValue, index) => {
                  return (
                    <label
                      key={index}
                      className=" main-sidePanel-filter-values"
                    >
                      <Checkbox
                        index={index}
                        uniqueValue={uniqueValue}
                        keyValue={key}
                        handleInputChange={handleInputChange}
                      />{" "}
                      <div>{uniqueValue}</div>
                    </label>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
}
