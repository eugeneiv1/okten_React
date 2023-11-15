import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";

import {carValidator} from "../../validators/carValidator";
import {useDispatch, useSelector} from "react-redux";
import {carsService} from "../../services/carsService";
import {carsActions} from "../../store/slices/carsSlice";
import {useEffect} from "react";


const CarForm = () => {
    const {register, reset, handleSubmit, formState:{isValid, errors}, setValue} = useForm({
        mode: 'all',
        resolver: joiResolver(carValidator)
    })

    const {carForUpdate, trigger} = useSelector(store => store.cars);
    const dispatch = useDispatch();

    const saveCar = async (car) => {
        if (carForUpdate) {
            await carsService.updateById(carForUpdate.id, car)
            dispatch(carsActions.changeTrigger());
            reset();
        } else {
            await carsService.createNewCar(car).then(({data}) => data);
            dispatch(carsActions.changeTrigger());
            console.log(trigger);
            reset();
        }
    }

    const setFormValues = () => {
        setValue('brand', carForUpdate.brand, {shouldValidate: true})
        setValue('price', carForUpdate.price, {shouldValidate: true})
        setValue('year', carForUpdate.year, {shouldValidate: true})
    }

    useEffect(() => {
        if (carForUpdate) {
            setFormValues();
        }
    }, [carForUpdate]);

    return (
        <form onSubmit={handleSubmit(saveCar)}>
            <input type="text" {...register('brand')} placeholder={'Enter brand'}/>
            <input type="text" {...register('price', {valueAsNumber: true})} placeholder={'Enter price'}/>
            <input type="text"{...register('year', {valueAsNumber: true})} placeholder={'Enter manuf year'}/>
            <button disabled={!isValid}>Save car</button>
            {errors.brand && <div>{errors.brand.message}</div>}
            {errors.price && <div>{errors.price.message}</div>}
            {errors.year && <div>{errors.year.message}</div>}
        </form>
    );
};

export default CarForm;