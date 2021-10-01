import redirect from "./redirect";
import { setCookie, getCookie, removeCookie } from "./cookie";
import { authenticate } from "../services/authApi";
import { createUser } from "../services/userApi";
import { validateCredentials, validateNewUser } from "./validateNewUser";

export const signIn = async (email: string, password: string) => {
  const error = validateCredentials(email, password);
  if (error) {
    return error;
  }

  const res = await authenticate(email, password);
  if (!res.jwt) {
    return res;
  }

  setCookie("jwt", res.jwt);
  redirect("/user");
  return null;
};

export const signUp = async (name:string, email:string, password:string, password_confirmation:string) => {
  const error = validateNewUser(name, email, password, password_confirmation);
  if (error) {
    return error;
  }

  const res = await createUser(name, email, password, password_confirmation);

//   if (!res.data) {
//     return res;
//   }

  setCookie("success", `${name}, your account was created.`);
  redirect("/auth/login");
  return null;
};

export const signOut = (ctx = {}) => {
  if (process.browser) {
    removeCookie("jwt");
    redirect("/auth/login", ctx);
  }
};

export const getJwt = (ctx : any) => {
  return getCookie("jwt", ctx.req);
};

export const isAuthenticated = (ctx: any) => !!getJwt(ctx);

export const redirectIfAuthenticated = (ctx: any) => {
  if (isAuthenticated(ctx)) {
    redirect("/user", ctx);
    return true;
  }
  return false;
};

export const redirectIfNotAuthenticated = (ctx: any) => {
  if (!isAuthenticated(ctx)) {
    redirect("/auth/login", ctx);
    return true;
  }
  return false;
};