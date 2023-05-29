import * as Joi from "joi";

export const joiValidationSchema = Joi.object({

    MONGODB: Joi.required(),
    PORT: Joi.number().default(3000),
})

