import axios from "axios";

const api = axios.create({
  baseURL: `https://digimon-api.com/api/v1/digimon`,
});

export default api;