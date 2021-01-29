import React from "react";
import "./sidePanel.css";

export default function SidePanel({ displayedData }) {
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

  return (
    <React.Fragment>
      {/* side panel */}
      <div className="main-sidePanel flex py-3">
        <h1>Filters</h1>
        {uniqueKeys.map((key, index) => {
          return (
            <div key={index}>
              <h2>{key}</h2>
              <ul className="main-sidePanel-filter-values-container flex">
                {uniqueValues[key].map((uniqueValue, index) => {
                  return <li key={index}>{uniqueValue}</li>;
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
}
