// import React, { createContext, useContext } from 'react';

import LeftSide from "./pages/main/LeftSide";
import Main from "./pages/main/Main";
import style from "../public/css/app.module.css"

const displayFlex = {
  display: "flex", 
  alignItems: "center",
  height:"100%"
}
function App() {
  return (
    <div style={displayFlex}> {/* common.css로 수정해야함 */}
      <LeftSide /> 
      <Main /> 
    </div>
  );
}
export default App;
