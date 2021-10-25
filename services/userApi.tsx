import { register } from "@utils/firebase/auth";
import { post, get } from "../utils/request";

export const createUser = async (
  email: string,
  f_name: string,
  l_name: string,
  mobile: string,
  password: string,
  password_confirmation: string
) => {
  try {
    // const response = await post("/users", {
    //   user: {
    //     name,
    //     email,
    //     password,
    //     password_confirmation
    //   }
    // });
    // return response;

    // firebase register
    // register(email, password)
    
    localStorage.setItem("user", JSON.stringify({email: email, f_name: f_name, l_name: l_name, mobile: mobile, password: password}))
  } catch (error) {
    // return error.response && error.response.status === 422
    //   ? "Email is already taken."
    //   : "Unknown error. Please try again";
  }
};

export const getUsers = () => {
  return getData("/users", null);
};

export const getUser = (jwt: string, id: string) => {
  return getData(`/users/${id}`, jwt);
};

export const getCurrentUser = (jwt: string) => {
  return getData("/users/current", jwt);
};

const getData = (endpoint: string, jwt: string | null) => {
  try {
    return get(endpoint, jwt);
  } catch (error) {
    return error;
  }
};