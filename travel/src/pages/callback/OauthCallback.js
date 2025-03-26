import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const OauthCallback = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const token = params.get("token");

        if (token) {
            localStorage.setItem("accessToken", token);
            alert("로그인 성공!");
            navigate("/");
        } else {
            alert("로그인 실패: 토큰 없음");
        }
    }, []);

    return <p>로그인 처리 중</p>;
};

export default OauthCallback;