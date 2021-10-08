export const validateEmail = (str: string) => {      
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    console.log(emailPattern.test(str))
    return emailPattern.test(str); 
}