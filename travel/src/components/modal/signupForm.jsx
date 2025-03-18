import {useState} from "react";
import styles from "./signupForm.module.css";

function signupForm(){
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const [passwordCheck, setPasswordCheck] = useState("");
    const [nickname, setNickname] = useState("");
    const [email, setEmail] = useState("");

    function duplicationId (event){
        // 아이디 중복확인 넣을것
    }

    function duplicationNickname (event){
        // 닉네임 중복확인 넣을것
    }

    function emailVerification (event){
        // 이메일 인증 넣을것
    }

    function handleSubmit(event){
        //폼제출 로직 넣을 곳
        alert("회원가입이 완료되었습니다.");

        //!확인 후 반드시 지울 것
        console.log({
            id,
            password,
            passwordCheck,
            nickname,
            email
        })
    }
}

// 마크업


return(
    <div className={styles.formContainer}>
        <h1 className={styles.title}>회원가입</h1>
        <p className={styles.subtitle}>회원이 되어 다양한 혜택을 경험해보세요</p>

        <div className={styles.require}>*필수 입력사항</div>

        <form onSubmit={handleSubmit}>
             {/*아이디 입력*/}
            <div className={styles.inputGroup}>
                <label className={styles.label}>
                    아이디<span className={styles.required}>*</span>
                </label>
                <div className={styles.inputWithButton}>
                    <input
                        type="text"
                        placeholder="아이디를 입력해주세요"
                        value={id}
                        onChange={(e) => setId(e.target.value)}
                        className={styles.input}
                    />
                    <button type="button" onClick={handleIdVerify} className={styles.verifyButton}>
                        중복확인
                    </button>
                </div>
                <p className={styles.helperText}>6글자 이상의 영문 혹은 영문과 숫자 조합</p>
            </div>
        </form>
    </div>
)