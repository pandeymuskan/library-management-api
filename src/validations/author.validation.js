import Joi from "joi";

export const authorSchema = Joi.object({
  name: Joi.string().min(2).max(100).required(),
  bio: Joi.string().allow("").max(500),
  birthDate: Joi.date().optional()
});