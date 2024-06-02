import axios from "axios";
import { API_URL } from "../constants";
const instance = axios.create({
    baseURL: API_URL,
    timeout : 3000
})

export default instance;