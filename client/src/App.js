import React, { useState } from "react";
import "./App.css";

// components
import Navbar from "./components/navbar/navbar.js";
import Categories from "./components/categories/categories.js";
import SidePanel from "./components/sidePanel/sidePanel.js";
import Gallery from "./components/gallery/gallery.js";

// mock data (A realistic approach would be to fetch data from DB or an API)
import Players from "./data/players.json";
import Matches from "./data/matches.json";
import Teams from "./data/teams.json";

function App() {
  // active main tab
  const [currentTab, setCurrentTab] = useState("Players");
  // state of the data that is currently requested by the user
  const [displayedData, setDisplayedData] = useState([]);
  // state of the data that is being modified by the filter arguments
  const [displayedDataFiltered, setDisplayedDataFiltered] = useState([]);
  // filter arguments
  const [filterArg, setFilterArg] = useState({});

  // used to switch views based on the main tabs
  const tabFunc = (tab) => (e) => {
    // reset the filter arguments
    setFilterArg({});
    setCurrentTab(tab);
  };

  // only show the relevant data when it is neeeded. Second part of the && statement is to prevent unnecessary rerenders.
  if (currentTab === "Players" && displayedData !== Players) {
    setDisplayedData(Players);
  } else if (currentTab === "Matches" && displayedData !== Matches) {
    setDisplayedData(Matches);
  } else if (currentTab === "Teams" && displayedData !== Teams) {
    setDisplayedData(Teams);
  }

  // placeholder for the altered displayed data
  let displayedDataFilteredNew = [];

  displayedData.map((each, index) => {
    // switch to indicate whether should we include the entry based on the filter arguments
    let toIncludeSwitch = true;
    Object.keys(filterArg).map((eachArg) => {
      // if entry does not fulfill the filter arguments, it will be removed from the state
      if (!filterArg[eachArg].includes(each[eachArg])) {
        toIncludeSwitch = false;
      }
      return null;
    });
    // if the switch is still true and the entry is unique, the entry is added.
    if (toIncludeSwitch && !displayedDataFilteredNew.includes(each)) {
      displayedDataFilteredNew.push(each);
    }
    return null;
  });

  // to prevent unecessary rerenders
  if (`${displayedDataFilteredNew}` !== `${displayedDataFiltered}`) {
    setDisplayedDataFiltered(displayedDataFilteredNew);
  }

  return (
    <div className="main container">
      <Navbar />
      <Categories tabFunc={tabFunc} currentTab={currentTab} />
      <SidePanel
        displayedData={displayedData}
        filterArg={filterArg}
        setFilterArg={setFilterArg}
      />
      {/* displayed content */}
      <Gallery
        displayedData={
          Object.keys(filterArg).length === 0
            ? displayedData
            : displayedDataFiltered
        }
      />
    </div>
  );
}

export default App;
