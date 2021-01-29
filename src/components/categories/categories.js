import React from "react";
import "./categories.css";

export default function Categories({ tabFunc, currentTab }) {
  let categories = [
    ["Players", "fa-user"],
    ["Teams", "fa-users"],
    ["Matches", "fa-futbol"],
    ["Deliveries", " fa-running"],
  ];

  return (
    <div className="main-categories flex py-2">
      <ul className="flex">
        {categories.map((category, index) => {
          if (category[0] === currentTab) {
            return (
              <li
                key={index}
                className="flex selected"
                onClick={tabFunc(category[0])}
              >
                <i className={`fas ${category[1]}`}></i>
                <b>{category[0]}</b>
              </li>
            );
          } else {
            return (
              <li key={index} className="flex" onClick={tabFunc(category[0])}>
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
