import {axiosService} from "./axiosService";

import {urls} from "../constants/urls";

const postsService = {
    getAllPosts: () => axiosService.get(urls.posts),
    getById: (id) => axiosService.get(urls.postById(id)),
    getCommentsById: (id) => axiosService.get(urls.commentsById(id))
}

export {
    postsService
}