// KakaoLogin.js
const KakaoLogin = () => {
    const handleKakaoLogin = () => {
        window.location.href = process.env.KAKAO_AUTH_URL;
    };
    return (
        <img
            onClick={handleKakaoLogin}
            src="/img/kakao.png"
            alt="카카오로 로그인"
            style={{ cursor: "pointer" }}
        />
    );
};

export default KakaoLogin;
