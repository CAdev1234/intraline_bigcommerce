import Cookies from 'js-cookie';


export const setCookie = (key: string, value: string) => {
  Cookies.set(key, value, {expires: 1, path: '/'});
};

export const removeCookie = (key: string) => {
  Cookies.remove(key, {expires: 1});
};

export const getCookie = (key: string, req: string) => {
    return getCookieFromBrowser(key)
//   return process.browser
//     ? getCookieFromBrowser(key)
//     : getCookieFromServer(key, req);
};

const getCookieFromBrowser = (key: string) => {
  // console.log(Cookies.get(key))
  return Cookies.get(key);
  return 
};

// const getCookieFromServer = (key: string, req: string) => {
//   if (!req.headers.cookie) {
//     return undefined;
//   }
//   const rawCookie = req.headers.cookie
//     .split(';')
//     .find((c:string) => c.trim().startsWith(`${key}=`));
//   if (!rawCookie) {
//     return undefined;
//   }
//   return rawCookie.split('=')[1];
// };