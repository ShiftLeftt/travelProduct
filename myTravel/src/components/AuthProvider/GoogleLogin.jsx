// KakaoLogin.js
const GoogleLogin = () => {
    const handleGoogleLogin = () => {
        window.location.href = import.meta.env.VITE_GOOGLE_AUTH_URL;
    };
    return (
        <img
            onClick={handleGoogleLogin}
            src="/img/google.png"
            alt="구글아이디로 로그인"
            style={{ cursor: "pointer" }}
        />
    );
};

export default GoogleLogin;
