import axios from 'axios';

//  axios 인스턴스 생성
const instance = axios.create({
    baseURL: 'http://localhost:8080/api', // 너의 백엔드 주소에 맞게 변경
    withCredentials: true, // 쿠키 인증이 아니라면 false여도 됨
    headers: {
        'Content-Type': 'application/json',
    },
});

// 요청 인터셉터 추가 - 토큰 자동 추가
instance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token'); // localStorage에 토큰 저장돼 있어야 함
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        console.error("Request interceptor error:", error);
        return Promise.reject(error);
    }
);

// 응답 인터셉터 추가 - 에러 처리
instance.interceptors.response.use(
    (response) => response,
    (error) => {
        console.error("Response error:", error);
        return Promise.reject(error);
    }
);


export default instance;