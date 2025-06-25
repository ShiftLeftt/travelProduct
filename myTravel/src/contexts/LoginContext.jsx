//로그인 상태 전역관리용
import React, {createContext, useEffect, useState} from 'react';

export const LoginContext = createContext({});
export function LoginProvider({ children }) {
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState(null);


  useEffect(() => {
    const jwtToken = localStorage.getItem("토큰으로 바꿔야함!!!");
    if(!jwtToken) return

    const checkToken = async () => {
      try{
        const res = await fetch("http://localhost:8080/api/auth/토큰체크엔드포인트", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${jwtToken}`,
            "Content-Type": "application/json",
        }
        });

        if(res.ok){
          const data = await res.json();
          setIsLogin(true);
          setUser(data); //유저네임 또는 아이디일듯
        }
        else{

          setIsLogin(false);
          setUser(null);
        }

      } catch (err){
        console.error("토큰 확인되지않음");
        setIsLogin(false);
        setUser(null);
      }
    }
    checkToken();

  }, []);



return(
    <LoginContext.Provider value={{ isLogin, setIsLogin,user,setUser }}>
      {children}
    </LoginContext.Provider>
  );
}