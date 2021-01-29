import React from "react";
import "./gallery.css";

export default function Gallery({ displayedData }) {
  return (
    <div className="main-content p-3">
      {displayedData.slice(0, 20).map((each, index) => {
        return (
          <div className="card p-2 my-1" key={index}>
            {Object.keys(each).map((key, index) => {
              // cleaning up the data to display the title in a proper format
              let title =
                key.split("_")[0].charAt(0).toUpperCase() +
                key.split("_")[0].slice(1);

              if (key.split("_")[1]) {
                title = title + " " + key.split("_")[1];
              }

              // data from each key
              let data = each[key];

              if (index === 0) {
                return (
                  <React.Fragment key={index}>
                    <div className="text-center">
                      <b className="card-header">{data}</b>
                    </div>
                    <br />
                  </React.Fragment>
                );
              } else {
                return (
                  <div key={index} className="card-detail">
                    {title}: {data}
                  </div>
                );
              }
            })}
          </div>
        );
      })}
      {/* create gap at bottom */}
      <div></div>
    </div>
  );
}
