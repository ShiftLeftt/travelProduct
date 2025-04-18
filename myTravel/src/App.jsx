import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Seasons from "./pages/seasons/seasons";
import Community from "./pages/community/Community";
import CommunityDetail from "./pages/community/CommunityDetail";
import CommunityModify from "./pages/community/CommunityModify";
import Random from "./pages/random/random";
import TravelPlan from "./pages/main/TravelPlan";
import UserLogin from "./pages/main/UserLogin";
import Main from "./pages/main/Main";
import Home from "./pages/home/Home";
import styles from "./app.module.css";
import "./styles/common.css";
import "./styles/reset.css";
function App() {
  return (
    <Router>
      <div className={styles.displayFlex}>
        <TravelPlan />
        <Main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Community" element={<Community />} />
            <Route
              path="/Community/CommunityDetail"
              element={<CommunityDetail />}
            />
            <Route path="/CommunityModify" element={<CommunityModify />} />
            <Route path="/random" element={<Random />} />
            <Route path="/seasons" element={<Seasons />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </Main>
        <UserLogin />
      </div>
    </Router>
  );
}

export default App;
