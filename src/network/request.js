import axios from "axios";
const ip = 102;
export function Http(config) {
  const Http = axios.create({
    baseURL: `http://192.168.0.${ip}:8888/Index`,
    timeout: 4000,
  });
  return Http(config);
}
