import {axiosService} from "./axiosService";
import {urls} from "../constants/urls";

const carsService = {
    getAllCars: () => axiosService.get(urls.cars.getAll),
    createNewCar: (car) => axiosService.post(urls.cars.getAll, car),
    deleteCar: (id) => axiosService.delete(urls.cars.byId(id)),
    updateById: (id, car) => axiosService.put(urls.cars.byId(id), car)
}

export {
    carsService
}