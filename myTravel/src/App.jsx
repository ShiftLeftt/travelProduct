import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LocationProvider } from "./contexts/LocationContext.jsx";
import {LoginProvider} from "./contexts/LoginContext.jsx";
import Seasons from "./pages/seasons/seasons";
import Community from "./pages/community/Community";
import CommunityDetail from "./pages/community/CommunityDetail";
import CommunityModify from "./pages/community/CommunityModify";
import CommunityUpdate from "./pages/community/CommunityUpdate";
import Random from "./pages/random/random";
import KakaoMap from "./components/MapUtil/Map.jsx";
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
      <LoginProvider>
      <LocationProvider>
        <div className={styles.displayFlex}>
          <TravelPlan />
          <Main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Community" element={<Community />} />
              <Route
                path="/Community/:id/CommunityDetail"
                element={<CommunityDetail />}
              />
              <Route
                path="/Community/CommunityUpdate"
                element={<CommunityUpdate />}
              />
              <Route
                path="/Community/CommunityModify"
                element={<CommunityModify />}
              />
              <Route path="/random" element={<Random />} />
              <Route path="/seasons" element={<Seasons />} />
              <Route path="/home" element={<Home />} />
              <Route path="/map" element={<KakaoMap />} />
            </Routes>
          </Main>
          <UserLogin />
        </div>
      </LocationProvider>
      </LoginProvider>
    </Router>
  );
}

export default App;
