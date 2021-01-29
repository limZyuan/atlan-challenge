import React from "react";
import "./categories.css";

export default function Categories({ tabFunc, currentTab }) {
  // the main categories with its font awesome className as the second element
  let categories = [
    ["Players", "fa-user"],
    ["Teams", "fa-users"],
    ["Matches", "fa-futbol"],
  ];

  return (
    <div className="main-categories flex py-2">
      <ul className="flex">
        {categories.map((category, index) => {
          // Active tab will have the 'selected' className
          if (category[0] === currentTab) {
            return (
              <li
                key={index}
                className="flex selected"
                onClick={tabFunc(category[0])}
                title={category[0]}
              >
                <i className={`fas ${category[1]}`}></i>
                <b>{category[0]}</b>
              </li>
            );
          } else {
            return (
              <li
                title={category[0]}
                key={index}
                className="flex"
                onClick={tabFunc(category[0])}
              >
                <i className={`fas ${category[1]}`}></i>
                <b>{category[0]}</b>
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
}
