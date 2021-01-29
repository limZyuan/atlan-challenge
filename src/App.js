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
import Deliveries from "./data/deliveries.json";

function App() {
  const [currentTab, setCurrentTab] = useState("Players");
  // state of the data that is currently requested by the user
  const [displayedData, setDisplayedData] = useState("");

  const tabFunc = (tab) => (e) => {
    setCurrentTab(tab);
  };

  // only show the relevant data when it is neeeded. Second part of the && statement is to prevent unnecessary rerenders.
  if (currentTab === "Players" && displayedData !== Players) {
    setDisplayedData(Players);
  } else if (currentTab === "Matches" && displayedData !== Matches) {
    setDisplayedData(Matches);
  } else if (currentTab === "Teams" && displayedData !== Teams) {
    setDisplayedData(Teams);
  } else if (currentTab === "Deliveries" && displayedData !== Deliveries) {
    setDisplayedData(Deliveries);
  }

  return (
    <div className="main container">
      <Navbar />
      <Categories tabFunc={tabFunc} currentTab={currentTab} />
      <SidePanel displayedData={displayedData} />
      {/* displayed content */}
      <Gallery displayedData={displayedData} />
    </div>
  );
}

export default App;
