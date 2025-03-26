import { useState } from "react";
import styles from "./signupForm.module.css";
import style from "./signupModal.module.css";

function SignupForm({ onClose }) {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");

  const duplicationId = () => {
    // TODO: 중복확인 로직
  };

  const emailVerification = () => {
    // TODO: 이메일 인증 로직
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("가입 완료!");
  };

  return (
    <div className={styles.formHeader}>
      <button className={style.modalClose} onClick={onClose}>
        ×
      </button>
      <h1 className={styles.title}>회원가입</h1>
      <div className={styles.subtitleWrap}>
        <p className={styles.subtitle}>
          회원이 되어 다양한 혜택을 경험해보세요!
        </p>
        <p className={styles.requiredNotice}>* 필수입력사항</p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className={styles.inputGroup}>
          <label className={styles.label}>
            아이디<span className={styles.required}>*</span>
          </label>
          <div className={styles.inputWithButton}>
            <input
              type="text"
              placeholder="아이디를 입력해주세요."
              value={id}
              onChange={(e) => setId(e.target.value)}
              className={styles.input}
            />
            <button
              type="button"
              onClick={duplicationId}
              className={styles.verifyButton}
            >
              중복확인
            </button>
          </div>
        </div>
        <p className={styles.helperText}>
          6글자 이상의 영문 혹은 영문과 숫자 조합
        </p>

        <div className={styles.inputGroup}>
          <label className={styles.label}>
            비밀번호<span className={styles.required}>*</span>
          </label>
          <input
            type="password"
            placeholder="비밀번호를 입력해주세요."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={styles.input}
          />
        </div>
        <p className={styles.helperText}>특수문자 포함 8자 이상</p>

        <div className={styles.inputGroup}>
          <label className={styles.label}>
            비밀번호 확인<span className={styles.required}>*</span>
          </label>
          <input
            type="password"
            placeholder="비밀번호를 다시 입력해주세요."
            value={passwordCheck}
            onChange={(e) => setPasswordCheck(e.target.value)}
            className={styles.input}
          />
        </div>

        <div className={styles.inputGroup}>
          <label className={styles.label}>닉네임</label>
          <input
            type="text"
            placeholder="사용할 닉네임을 입력해주세요."
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            className={styles.input}
          />
        </div>
        <p className={styles.helperText}>6글자까지 가능</p>

        <div className={styles.inputGroup}>
          <label className={styles.label}>
            이메일<span className={styles.required}>*</span>
          </label>
          <div className={styles.inputWithButton}>
            <input
              type="email"
              placeholder="이메일을 입력해주세요."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={styles.input}
            />
            <button
              type="button"
              onClick={emailVerification}
              className={styles.verifyButton}
            >
              인증하기
            </button>
          </div>
        </div>
        <p className={styles.helperText}>예 : example123@gmail.com</p>

        <button type="submit" className={styles.submitButton}>
          가입하기
        </button>
      </form>
    </div>
  );
}

export default SignupForm;
