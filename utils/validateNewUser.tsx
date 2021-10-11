export const validateNewUser = (
    email: string,
    f_name: string,
    l_name: string,
    mobile: string,
    password: string,
    password_confirmation: string
  ) => {
    if (!f_name || !l_name) {
      return "Name field is required.";
    }
  
    if (password !== password_confirmation) {
      return "Password and confirmation password must match.";
    }
  
    return validateCredentials(email, password);
  };
  
  export const validateCredentials = (email:string, password: string) => {
    if (!email || !password) {
      return "Email and password fields are required.";
    }
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(email)) {
      return "Email does not have right format.";
    }
  
    if (!(password.length >= 8)) {
      return "Password needs at least 8 characters.";
    }
  
    return null;
  };