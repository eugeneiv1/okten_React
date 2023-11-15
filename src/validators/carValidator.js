import Joi from "joi";


const carValidator = Joi.object({
    brand: Joi.string().pattern(/^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/).required().messages(({
        'string.pattern.base': 'Just think about it'
    })),
    price: Joi.number().min(0).max(1000000).required(),
    year: Joi.number().min(1990).max(2023).required()
})

export {
    carValidator
}