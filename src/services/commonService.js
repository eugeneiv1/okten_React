import {axiosService} from "./axiosService";
import {urls} from "../constants/urls";

const commonService = {
    getTodos: () => axiosService.get(urls.todos),
    getAlbums: () => axiosService.get(urls.albums),
    getComments: () => axiosService.get(urls.comments.base),
    getPostById: (id) => axiosService.get(urls.comments.postById(id))
}

export {
    commonService
}