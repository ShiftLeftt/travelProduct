const validation =() => {
    const idRegex = /[ \{\}\[\]\/?.,;:|\)*~`!^\_+┼<>@\#$%&\'\"\\\(\=]/gi;
    const passwordRegex = /[ \{\}\[\]\/?.,;:|\)*~`!^\_+┼<>@\#$%&\'\"\\\(\=]/gi;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if(userId === idRegex) {
        alert("아이디에 특수문자를 포함 할 수 없습니다.");
        return false;
    }

    if(password === passwordRegex) {
        alert("비밀번호에 특수문자를 포함 할 수 없습니다.");
        return false;
    }

    if(!emailRegex.test(email)) {
        alert("이메일 형식이 올바르지 않습니다.");
        return false;
    }





}