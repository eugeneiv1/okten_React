import axios from "axios";
import {carsBaseURL} from "../constants/carsUrls";

const carsAxiosService = axios.create({baseURL:carsBaseURL});

export {
    carsAxiosService
}