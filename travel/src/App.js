// import React, { createContext, useContext } from 'react';

import LeftSide from "./pages/main/LeftSide";
import main from "./pages/main/main";
import style from "/css/app.module.css";

function App() {
  return (
    <div className={style.displayFlex}>
      {" "}
      {/* common.css로 수정해야함 */}
      <LeftSide />
      <main />
    </div>
  );
}
export default App;
