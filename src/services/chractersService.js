import {axiosService} from "./axiosService";
import {urls} from "../constants/urls";

const charactersService = {
    getAll: (id) => axiosService.get(urls.charactersById(id))
}

export {
    charactersService
}