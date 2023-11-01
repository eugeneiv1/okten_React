import {useEffect, useState} from "react";

import {carService} from "../../services/carService";
import {Cars} from "./Cars/Cars";
import {CarForm} from "./CarForm/CarForm";


const CarsContainer = () => {
    const [cars, setCars] = useState([]);
    const [trigger, setTrigger] = useState(true)

    useEffect(()=> {
        carService.getAll().then(({data}) => setCars(data));

    }, [trigger])

    return (
        <div>
            <CarForm setTrigger={setTrigger}/>
            <Cars cars={cars}/>
        </div>
    );
};

export {CarsContainer};