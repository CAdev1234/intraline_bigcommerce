import cookie from 'js-cookie';

export const setCookie = (key: string, value: string) => {
  cookie.set(key, value, {expires: 1, path: '/'});
};

export const removeCookie = (key: string) => {
  cookie.remove(key, {expires: 1});
};

export const getCookie = (key: string, req: string) => {
    return getCookieFromBrowser(key)
//   return process.browser
//     ? getCookieFromBrowser(key)
//     : getCookieFromServer(key, req);
};

const getCookieFromBrowser = (key: string) => {
  return cookie.get(key);
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