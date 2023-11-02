import {carService} from '../../../services/carService'

const Car = ({car, setCarForUpdate, setTrigger}) => {

    const {id, brand, price, year} = car;

    const deleteCar = async (id) => {
        await carService.deleteById(id);
        setTrigger(prev => !prev);
    }

    return (
        <div>
            <h1>ID: {id}</h1>
            <h2>Brand: {brand}</h2>
            <p>Price: {price}</p>
            <p>Manuf year: {year}</p>
            <div>
                <button onClick={ () => setCarForUpdate(car)}>update</button>
                <button onClick={() => deleteCar(id)}>delete</button>
            </div>
        </div>
    );
};

export {Car};