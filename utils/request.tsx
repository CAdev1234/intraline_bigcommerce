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


export const fetchApiWithBody = (hostname:string, endpoint: string, method: string, body?: string) => {
  let url = hostname + endpoint
  return fetch(`${url}`, {
      'headers': {
          "accept": "application/json, text/javascript, */*; q=0.01",
          "accept-language": "en-US,en;q=0.9",
          "content-type": "application/json",
          "sec-ch-ua": "\"Chromium\";v=\"88\", \"Google Chrome\";v=\"88\", \";Not A Brand\";v=\"99\"",
          "sec-ch-ua-mobile": "?0",
          "sec-fetch-dest": "empty",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-origin",
          "x-requested-with": "XMLHttpRequest",
      },
      'method': method,
      'body': body
  })
}

export const fetchApiWithoutBody = (hostname:string, endpoint: string, method: string) => {
  let url = hostname + endpoint
  return fetch(`${url}`, {
      'headers': {
          "accept": "application/json, text/javascript, */*; q=0.01",
          "accept-language": "en-US,en;q=0.9",
          "content-type": "application/json",
          "sec-ch-ua": "\"Chromium\";v=\"88\", \"Google Chrome\";v=\"88\", \";Not A Brand\";v=\"99\"",
          "sec-ch-ua-mobile": "?0",
          "sec-fetch-dest": "empty",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-origin",
          "x-requested-with": "XMLHttpRequest",
      },
      'method': method,
  })
}