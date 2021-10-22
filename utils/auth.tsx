import redirect from "./redirect";
import { setCookie, getCookie, removeCookie } from "./cookie";
import { authenticate } from "../services/authApi";
import { createUser } from "../services/userApi";
import { validateCredentials, validateNewUser } from "./validateNewUser";
import { decodeEmail } from "./simpleMethod";


export const loginAuth = async (email: string, password: string) => {
  const error = validateCredentials(email, password);
  if (error) {
    console.log("error=", error)
    return error;
  }

  const res = await authenticate(email, password);
  console.log("res=", res)
  if (typeof(res) === 'object') {
    setCookie("jwt", res.jwt);
    return res
  }else {
    return res
  }
};

export const registerAuth = async (email:string, f_name: string, l_name: string, mobile: string, password:string, password_confirmation:string) => {
  const error = validateNewUser(email, f_name, l_name, mobile, password, password_confirmation);
  if (error) { return error;}
  const res = await createUser(email, f_name, l_name, mobile, password, password_confirmation);
  setCookie("success", `${f_name} ${l_name}, your account was created.`);
  redirect('/account/login')
  return null;
};

export const logoutAuth = (ctx = {}) => {
  if (process.browser) {
    removeCookie("jwt");
    redirect("/account/login", ctx);
  }
};

export const updatePassword = (new_password: string, email_encoded: string) => {
  let email = decodeEmail(email_encoded)
  // localStorage.getItem('')
}

export const getJwt = (ctx : any) => {
  return getCookie("jwt", ctx.req);
};

export const isAuthenticated = (ctx: any) => !!getJwt(ctx);

export const redirectIfAuthenticated = (ctx: any) => {
  if (isAuthenticated(ctx)) {
    redirect("/", ctx);
    return true;
  }
  return false;
};

export const redirectIfNotAuthenticated = (ctx: any) => {
  if (!isAuthenticated(ctx)) {
    redirect("/account/login", ctx);
    return true;
  }
  return false;
};