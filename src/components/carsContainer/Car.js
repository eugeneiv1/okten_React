import {carsService} from "../../services/carsService";
import {useDispatch} from "react-redux";
import {carsActions} from "../../store/slices/carsSlice";


const Car = ({car}) => {
    const {brand, price, year, id} = car;
    const disptach = useDispatch();

    const deleteCar = async () => {
        await carsService.deleteCar(id);
        disptach(carsActions.changeTrigger())
    }

    const updateCar = () => {
        disptach(carsActions.updateCar(car));
    }

    return (
        <div>
            <h3>{brand}</h3>
            <p>{price} : {year}</p>
            <button onClick={updateCar}>update</button>
            <button onClick={deleteCar}>delete</button>
        </div>
    );
};

export {Car};