



function validation (userId, password, passwordCheck, email) {
    const idRegex = /[ \{\}\[\]\/?.,;:|\)*~`!^\_+┼<>@\#$%&\'\"\\\(\=]/gi;
    const passwordRegex = /[ \{\}\[\]\/?.,;:|\)*~`!^\_+┼<>@\#$%&\'\"\\\(\=]/gi;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!userId || !password || !email) {
        return { valid: false, message: "모든 필드를 입력해주세요." };
    }
    if (userId.length < 4 || userId.length > 20) {
        return { valid: false, message: "아이디는 4자 이상 20자 이하로 입력해주세요." };
    }
    if (password.length < 8 || password.length > 20) {
        return { valid: false, message: "비밀번호는 8자 이상 20자 이하로 입력해주세요." };
    }
    if (idRegex.test(userId)) {
        return { valid: false, message: "아이디에 특수문자는 사용할 수 없습니다." };
    }
    if (!passwordRegex.test(password)) {
        return { valid: false, message: "비밀번호에 특수문자를 사용해주세요." };
    }
    if (!emailRegex.test(email)) {
        return { valid: false, message: "유효한 이메일 주소를 입력해주세요." };
    }

    return { valid: true };


}

export default validation;