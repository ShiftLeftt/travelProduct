// 네이버 로그인 컴포넌트
const NaverLogin = () => {
    const handleNaverLogin = () => {
        window.location.href = process.env.NAVER_AUTH_URL;
    };
    return (
        <img
            onClick={handleNaverLogin}
            src="/img/naver.png"
            alt="네이버아이디로 로그인"
            style={{ cursor: "pointer" }}
        />
    );
};

export default NaverLogin;
