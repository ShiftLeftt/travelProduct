import {useState} from "react";

function CheckBox() {
    const [isChecked, setIsChecked] = useState(false)
    const toggle = ()=> setIsChecked(!isChecked)

    return(
        <div className={"checkbox"}>
            <p>동의합니다.</p>
            <input type="checkbox" onClick={toggle}/>
            <button className={"agreeBtn"} type={"submit"} disabled={!isChecked}>동의하기</button>
        </div>

    )
}

export default CheckBox