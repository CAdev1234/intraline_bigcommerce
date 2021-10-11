import { post } from "../utils/request";


export const authenticate = async (email: string, password: string) => {
  try {
    // const res = await post("/user_token", {
    //   auth: {
    //     email,
    //     password
    //   }
    // });
    // return res.data;
    if (localStorage.getItem('user')) {
      let userInfo = JSON.parse(localStorage.getItem('user') as string)
      if (userInfo.email === email && userInfo.password === password) {
        const res = {
          jwt: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
        }
        return res
      }else {
        return "Email or Password Incorrect"
      }
    }else {
      return "Your email is not exist. Please create account first."
    }
    
    return 
  } catch (error) {
        // return error.response && error.response.status === 404
        // ? "Wrong email/password"
        // : "Unknown error. Please try again";
  }
};