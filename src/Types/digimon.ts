import axios from "axios";

const apiClient = axios.create({
    baseURL: "https://digimon-api.com/api/v1/digimon/",
  });
  
export default interface digimon{
    id: number;
    name: string;
}