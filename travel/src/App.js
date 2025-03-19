import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Seasons from "./pages/seasons/seasons";
import Community from "./pages/community/community";
import Random from "./pages/random/random";
// import TravelPlan from "./pages/main/TravelPlan";
// import UserLogin from "./pages/main/UserLogin";
import Main from "./pages/main/Main";
import RightSide from "./pages/main/RightSide";
import LeftSide from "./pages/main/LeftSide";
// <<<<<<< HEAD
import Home from "./pages/home/home";
import styles from "./app.module.css";
import "./styles/common.css";

import "./styles/reset.css";
// * =======
// import Home from "./pages/home/home"
// import styles from "./app.module.css"
// import './styles/common.css'
// // import './styles/fonts.css'
// import './styles/reset.css'
// >>>>>>> origin/signupTask

function App() {
  return (
    <Router>
      <div className={styles.displayFlex}>
        {/* <<<<<<< HEAD
                <TravelPlan/>
                    <Main>
                        <Routes>
                            <Route path="/community" element={<Community/>}/>
                            <Route path="/random" element={<Random/>}/>
                            <Route path="/seasons" element={<Seasons/>}/>
                            <Route path="/home" element={<Home/>}/>
                        </Routes>
                    </Main>
                <UserLogin/>
======= */}
        <LeftSide />
        <Main>
          <Routes>
            <Route path="/community" element={<Community />} />
            <Route path="/random" element={<Random />} />
            <Route path="/seasons" element={<Seasons />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </Main>
        <RightSide />
        {/* >>>>>>> origin/signupTask */}
      </div>
    </Router>
  );
}

export default App;
