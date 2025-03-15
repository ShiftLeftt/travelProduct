import style from './signupModal.module.css';
import CheckBox from "./checkboxFunction";




function SignupModal({ isOpen, onClose, children }) {
    const [modalStatus, setModalStatus] = useState(1);
    return (
        <div className={`${style.modal} ${isOpen ? style.modalOpen : ''}`}>

            <div className={style.modalFrame}>

                {modalStatus === 1 ? (
                        <div className={style.modalHeader}>
                            <h1>회원가입</h1>
                            <p>회원이 되어 다양한 혜택을 경험해보세요!</p>
                            <button className={style.modalClose} onClick={onClose}>×</button>
                        </div>
                    <div className={style.modalContent}>
                        <div className={style.modalPersonalInfoHeader}>
                            <h1>개인정보 수집 이용 및 동의 </h1>
                            <p>안녕하세요, Journee를 찾아주셔서 감사합니다. <br/>
                                저희는 고객님께 맞춤형 여행 정보와 편리한 서비스 경험을 제공하기 위해 아래와 같이 개인정보를 수집·이용하고 있습니다.
                                안전한 서비스 이용을 위해 반드시 읽어보시고 동의해 주세요.</p>
                        </div>
                        <div className={style.modalPersonalInfoContent}>
                            <h3>1. 수집하는 개인정보 항목</h3>
                            <ul>
                                <li>아이디</li>
                                <li>비밀번호</li>
                                <li>닉네임</li>
                                <li>이메일</li>
                            </ul>

                        </div>
                    </div>
                {/*버튼*/}
                    <CheckBox/>
                    ):(
                        <Modal2/>

                    )}


            </div>
        </div>
    );
}

export default SignupModal;