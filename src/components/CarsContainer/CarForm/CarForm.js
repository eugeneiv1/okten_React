import {useForm} from "react-hook-form";
import {joiResolver} from '@hookform/resolvers/joi';
import {useEffect} from "react";

import {carService} from '../../../services/carService'
import {carValidator} from '../../../validator/carValidator'


const CarForm = ({setTrigger, carForUpdate}) => {
    const {register, reset, handleSubmit, formState: {isValid, errors}, setValue} = useForm({
        mode: 'all',
        resolver: joiResolver(carValidator)
    })

    const saveCar = async (car) => {
        if (carForUpdate) {
            await carService.fullUpdateCar(carForUpdate.id, car);
            setTrigger(prev => !prev);
            reset();
        } else {
            await carService.addNewCar(car);
            setTrigger(prev => !prev);
            reset();
        }
    }

    useEffect(() => {
        if (carForUpdate) {
            setValue('brand', carForUpdate.brand, {shouldValidate: true})
            setValue('price', carForUpdate.price, {shouldValidate: true})
            setValue('year', carForUpdate.year, {shouldValidate: true})
        }
    }, [carForUpdate])

    return (
        <div>
            <form onSubmit={handleSubmit(saveCar)}>
                <input type="text" placeholder={'brand'} {...register('brand')}/>
                <input type="text" placeholder={'price'} {...register('price', {valueAsNumber: true})}/>
                <input type="text" placeholder={'year'} {...register('year', {valueAsNumber: true})} />
                <button disabled={!isValid}>Add Car</button>
            </form>
            {errors.brand && <div>{errors.brand.message}</div>}
            {errors.price && <div>{errors.price.message}</div>}
            {errors.year && <div>{errors.year.message}</div>}
        </div>
    );
};

export {CarForm};