import axios, { Method } from "axios";

class RestClient {
  static apiCaller(
    url: string,
    data: any,
    method: Method = "get",
    options = {}
  ): Promise<any> {
    return axios({
      baseURL: process.env.REACT_APP_BASE_API,
      url,
      method,
      data,
      ...options,
    });
  }
}

export default RestClient;
