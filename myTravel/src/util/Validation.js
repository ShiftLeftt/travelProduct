

export function sqlInjectionValidation(keyword){
    const blockPattern = /['"`\\;()]/; // SQL Injection 방지 패턴
    return blockPattern.test(keyword);
}