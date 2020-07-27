import axios from "axios";
export function Http(config) {
  const Http = axios.create({
    baseURL: "http://localhost:8888/Index",
    timeout: 4000,
  });
  return Http(config);
}
