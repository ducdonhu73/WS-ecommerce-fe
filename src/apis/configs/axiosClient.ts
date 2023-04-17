import axios, { AxiosError } from "axios";

import { HttpClient } from "./httpClient";
import { UrlRequest, buildAxiosRequestConfig } from "./urlRequestConfig";

axios.interceptors.request.use(
  config => {
    // if (!config?.headers) {
    //   throw new Error(
    //     `Expected 'config' and 'config.headers' not to be undefined`,
    //   );
    // }
    // const token = await AsyncStorage.getItem('token');
    // if (token) {
    //   config.headers['x-auth-token'] = token;
    // }
    // console.log("Requesting");
    // console.log(config.method?.toUpperCase(), config.url);
    // console.log("Headers", config.headers);
    if (config.data) console.log("Body   ", config.data);
    if (config.params) console.log("Params ", config.params);
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

axios.interceptors.response.use(
  response => {
    // console.log("Response received");
    // console.log("Headers", response.headers);
    // if (response.data) console.log("Body   ", JSON.stringify(response.data));
    return response;
  },
  error =>
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    Promise.reject(error),
);

export class AxiosClient implements HttpClient {
  // instance: AxiosInstance;

  // constructor(instance: AxiosInstance) {
  //   this.instance = instance;
  // }

  request<T, R>(request: UrlRequest<T>): Promise<R> {
    const axiosRequestConfig = buildAxiosRequestConfig(request);
    return axios
      .request<R>(axiosRequestConfig)
      .then(response => response.data)
      .catch((error: AxiosError) => {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          // console.log(error.response.data);
          // console.log(error.response.status);
          // console.log(error.response.headers);
          throw error.response.data;
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          // console.log(error.request);
          throw error.request;
        } else {
          // Something happened in setting up the request that triggered an Error
          // console.log("Error", error.message);
          throw error.message;
        }
      });
  }

  // get<T>(path: string, params?: any, configs?: AxiosRequestConfig) {
  //   return this.instance
  //     .get<T>(path, { ...configs, params: params })
  //     .then(response => response.data)
  //     .catch((err: Error | AxiosError) => {
  //       // TODO: Create a function hadling error
  //       throw err;
  //     });
  // }

  // post<T>(path: string, data?: any, configs?: AxiosRequestConfig) {
  //   return this.instance
  //     .post<T>(path, data, configs)
  //     .then(response => response.data)
  //     .catch((err: Error | AxiosError) => {
  //       throw err;
  //     });
  // }

  // put<T>(path: string, data?: any, configs?: AxiosRequestConfig) {
  //   return this.instance
  //     .put<T>(path, data, configs)
  //     .then(response => response.data)
  //     .catch((err: Error | AxiosError) => {
  //       throw err;
  //     });
  // }

  // _delete<T>(path: string, configs?: AxiosRequestConfig) {
  //   return this.instance
  //     .delete<T>(path, configs)
  //     .then(response => response.data)
  //     .catch((err: Error | AxiosError) => {
  //       throw err;
  //     });
  // }

  // request(method: HttpMethod, url: string, data?: object) {
  //   return this.instance
  //     .request({ url, method, data })
  //     .then(response => response.data)
  //     .catch(error => {
  //       // if (error.response.status === 403) {
  //       //   w
  //       // }
  //       console.error(error);
  //       throw error;
  //     });
  // }
}

const axiosClient = new AxiosClient();
export default axiosClient;
