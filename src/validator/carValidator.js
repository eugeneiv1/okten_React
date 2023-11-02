import Joi from "joi";

const carValidator = Joi.object( {
    brand: Joi.string().pattern(/^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/).required().messages({
        'string.pattern.base': 'Only letters, length from 1 to 20 chars'
    }),
    price: Joi.number().min(0).max(1000000).required().messages({
        'number.min' : 'We dont deal with free cars',
        'number.max' : 'We dont deal with expensive cars'
    }),
    year: Joi.number().min(1990).max(new Date().getFullYear()).required()
})

export {carValidator}