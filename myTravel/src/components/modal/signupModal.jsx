import { useState } from "react";
import style from "./signupModal.module.css";
import SignupForm from "./SignupForm";
import REACTDOM from "react-dom";

function SignupModal({ isOpen, onClose }) {
    const [modalStatus, setModalStatus] = useState(1);
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = (checked) => {
        setIsChecked(checked);
    };

    const handleNextStep = () => {
        if (isChecked) {
            setModalStatus(2);
        }
    };

    return REACTDOM.createPortal (
        <div className={`${style.modal} ${isOpen ? style.modalOpen : ""}`}>
            <div className={style.modalFrame}>
                {modalStatus === 1 ? (
                    <>
                        <div className={style.modalHeader}>
                            <h1>회원가입</h1>
                            <p>회원이 되어 다양한 혜택을 경험해보세요 !</p>
                            <button className={style.modalClose} onClick={onClose}>
                                <img src= "/img/closeBtn.svg" alt="닫기" />
                            </button>
                        </div>

                        <div className={style.modalContent}>
                            <div className={style.modalPersonalInfoContainer}>
                                <h1>개인정보 수집 이용 및 동의</h1>
                                <div className={style.modalPersonalInfoWrapper}>
                                    <div className={style.modalPersonalInfoIntro}>
                                        <p>
                                            안녕하세요, Journee를 찾아주셔서 감사합니다. <br />
                                            저희는 고객님께 맞춤형 여행 정보와 편리한 서비스 경험을 제공하기 위해 아래와 같이 개인정보를
                                            수집·이용하고 있습니다. <br />
                                            안전한 서비스 이용을 위해 반드시 읽어보시고 동의해 주세요.
                                        </p>
                                    </div>

                                    <div className={style.modalPersonalInfoContent}>
                                        <div className={style.infoSection}>
                                            <h3>1. 수집하는 개인정보 항목</h3>
                                            <ul>
                                                <li>• 필수 항목: 이름, 이메일 주소, 비밀번호, 연락처(휴대전화번호)</li>
                                                <li>• 선택 항목: 생년월일, 관심 여행지, 거주 지역</li>
                                            </ul>
                                        </div>

                                        <div className={style.infoSection}>
                                            <h3>2. 개인정보 수집 및 이용 목적</h3>
                                            <ul>
                                                <li>• 회원 식별 및 가입 절차 진행</li>
                                                <li>• 이용자 주문 및 맞춤형 서비스 제공</li>
                                                <li>• 여행 및 관련 서비스 안내</li>
                                                <li>• 고객 문의 응대 및 서비스 개선</li>
                                                <li>• 이벤트 관련 소식 및 이벤트 정보 제공(선택 동의 시)</li>
                                            </ul>
                                        </div>

                                        <div className={style.infoSection}>
                                            <h3>3. 개인정보 보유 및 이용 기간</h3>
                                            <p>회원 탈퇴 시 또는 개인정보 수집·이용 목적 달성 시까지</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={style.checkboxContainer}>
                                <input
                                    type="checkbox"
                                    id="agreeTerms"
                                    checked={isChecked}
                                    onChange={(e) => handleCheckboxChange(e.target.checked)}
                                    className={style.checkbox}
                                />
                                <label htmlFor="agreeTerms" className={style.checkboxLabel}>
                                    위 내용을 확인하였으며, 개인정보 수집 및 이용에 동의합니다.
                                </label>
                            </div>

                            <button className={style.nextButton} onClick={handleNextStep} disabled={!isChecked}>
                                다음
                            </button>
                        </div>
                    </>
                ) : (
                    <SignupForm onClose={onClose} />
                )}
            </div>
        </div>,
        document.body
    );
}

export default SignupModal;