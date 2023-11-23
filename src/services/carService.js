import {carsAxiosService} from "./carsAxiosService";
import {carsUrls} from "../constants/carsUrls";

class carService {
    getAll () {
        return carsAxiosService.get(carsUrls.cars)
    }
}

const carsService = new carService();

export {
    carsService
}