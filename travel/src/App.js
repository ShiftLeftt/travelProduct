import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Seasons from "./pages/seasons/seasons";
import Community from "./pages/community/community";
import Random from "./pages/random/random";
import TravelPlan from "./pages/main/TravelPlan";
import UserLogin from "./pages/main/UserLogin";
import Main from "./pages/main/Main";
// import RightSide from "./pages/main/RightSide";
// import LeftSide from "./pages/main/LeftSide";
import OauthCallback  from "./pages/callback/OauthCallback";
import Home from "./pages/home/home";
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
            <Route path="/community" element={<Community />} />
            <Route path="/random" element={<Random />} />
            <Route path="/seasons" element={<Seasons />} />
            <Route path="/home" element={<Home />} />
            <Route path="/oauth/callback" element={<OauthCallback />} />
          </Routes>
        </Main>
        <UserLogin />

      </div>
    </Router>
  );
}

export default App;
