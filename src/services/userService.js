import {axiosService} from "./axiosService";

import {urls} from "../constants/urls";

const userService = {
    geAll: () => axiosService.get(urls.users),
    getById: (id) => axiosService.get(urls.userById(id))
}

export {
    userService
}