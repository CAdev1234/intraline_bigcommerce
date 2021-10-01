import axios from "axios";

const API_HOST = "https://carlos-rails-api.herokuapp.com";

const getUrl = (endpoint: string) => API_HOST + endpoint;

export const post = async (endpoint: string, data: any) => {
  return axios.post(getUrl(endpoint), data, {
    headers: { "Content-Type": "application/json" }
  });
};

export const get = async (endpoint:string, jwt:string | null) => {
    if (jwt != null) {
        const headers =  {
            headers: { Authorization: `Bearer ${jwt}` }
        }
    //   const headers = jwt
    //     ? {
    //         headers: { Authorization: `Bearer ${jwt}` }
    //       }
    //     : null;
      return axios.get(getUrl(endpoint), headers);
    }
};