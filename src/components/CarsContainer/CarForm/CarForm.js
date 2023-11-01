import {useForm} from "react-hook-form";


const CarForm = ({setTrigger}) => {
    const {register, handleSubmit} = useForm({mode: 'all'})

    const saveCar = async (car) => {
        console.log(car);
        setTrigger(prev => !prev)
    }

    return (
        <div>
            <form onSubmit={handleSubmit(saveCar)}>
                <input type="text" placeholder={'car brand'} {...register('brand')}/>
                <input type="text" placeholder={'car price'} {...register('price')}/>
                <input type="text" placeholder={'manuf year'} {...register('year')} />
                <button>Add Car</button>
            </form>
        </div>
    );
};

export {CarForm};