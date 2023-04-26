import axios from "axios";

const Api = axios.create();

Api.defaults.baseURL = process.env.REACT_APP_API_URL;

Api.defaults.headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

//All request will wait 5 seconds before timeout
Api.defaults.timeout = 5000;

Api.defaults.withCredentials = true;

export default Api;
