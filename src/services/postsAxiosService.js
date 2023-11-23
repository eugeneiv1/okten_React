import axios from "axios";
import {postsBaseURL} from "../constants/postsUrls";

const postsAxiosService = axios.create({baseURL: postsBaseURL});

export {
    postsAxiosService
}