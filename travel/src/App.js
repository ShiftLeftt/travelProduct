import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Seasons from "./pages/seasons/seasons"
import Community from "./pages/community/community"
import Random from "./pages/random/random"
import LeftSide from "./pages/main/LeftSide";
import RightSide from "./pages/main/RightSide";
import Main from "./pages/main/Main";
import styles from "./app.module.css"
import './styles/common.css'
// import './styles/fonts.css'
import './styles/reset.css'


function App() {
    return (
        <Router>
            <div className={styles.displayFlex}>
                <LeftSide/>
                <Main>
                <Routes>
                    <Route path="/community" element={<Community/>}/>
                    <Route path="/random" element={<Random/>}/>
                    <Route path="/seasons" element={<Seasons/>}/>
                 </Routes>
                </Main>
                <RightSide/>
            </div>
</Router>

)
    ;
}

export default App;
