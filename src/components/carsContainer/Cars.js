import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {carsService} from "../../services/carsService";
import {carsActions} from "../../store/slices/carsSlice";
import {Car} from "./Car";


const Cars = () => {
    const {allCars, trigger} = useSelector(store => store.cars);

    const dispatch = useDispatch();

    useEffect(() => {
        carsService.getAllCars().then(({data}) => dispatch(carsActions.setCars(data)))
    }, [trigger]);

    return (
        <div>
            {allCars.map(car => <Car key={car.id} car={car}/>)}
        </div>
    );
};

export {Cars};