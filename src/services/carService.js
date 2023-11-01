import {axiosService} from "./axiosService";
import {urls} from "../constants/urls";

const carService = {
    getAll: () => axiosService.get(urls.base),
    getById: (id) => axiosService.get(urls.byId(id)),
    addNewCar: (car) => axiosService.post(urls.base, car),
    fullUpdateCar: (id, info) => axiosService.put(urls.byId(id), info),
    deleteById: (id) => axiosService.delete(urls.byId(id))
}

export {
    carService
}