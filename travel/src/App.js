// import React, { createContext, useContext } from 'react';

import LeftSide from "./pages/main/LeftSide";
<<<<<<< HEAD
import main from "./pages/main/main";
import style from "/css/app.module.css";

function App() {
  return (
    <div className={style.displayFlex}>
      {" "}
      {/* common.css로 수정해야함 */}
      <LeftSide />
      <main />
=======
import RightSide from "./pages/main/RightSide";
import Main from "./pages/main/Main";
import styles from "./app.module.css"
import './styles/common.css'
// import './styles/fonts.css'
import './styles/reset.css'

// const displayFlex = {
//   display: "flex", 
//   alignItems: "center",
//   height:"100%"
// }
function App() {
  return (
    <div className={styles.displayFlex}> {/* common.css로 수정해야함 */}
      <LeftSide /> 
      <Main /> 
      <RightSide/>
>>>>>>> 650e89065d9cfe00b1635de874fd2d8f67a56e6a
    </div>
  );
}
export default App;
