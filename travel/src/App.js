// import React, { createContext, useContext } from 'react';

import LeftSide from "./pages/main/LeftSide";
import RightSide from "./pages/main/RightSide";
import Main from "./pages/main/Main";
import styles from "./app.module.css";
import "./styles/common.css";
// import './styles/fonts.css'
import "./styles/reset.css";

// const displayFlex = {
//   display: "flex",
//   alignItems: "center",
//   height:"100%"
// }
function App() {
  return (
    <div className={styles.displayFlex}>
      {" "}
      {/* common.css로 수정해야함 */}
      <LeftSide />
      <Main />
      <RightSide />
    </div>
  );
}
export default App;
