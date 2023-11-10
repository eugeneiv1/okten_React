import {axiosService} from "./axiosService";

import {urls} from "../constants/urls";

const episodesService = {
    getAll: (page) => axiosService.get(urls.episodes, {params: {page}}),

}

export {
    episodesService
}