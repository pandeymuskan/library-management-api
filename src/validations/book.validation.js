import Joi from "joi";

export const bookSchema = Joi.object({
  title: Joi.string().min(2).max(200).required(),
  genre: Joi.string().allow("").max(100),
  author: Joi.string().hex().length(24).required(),
  publishedYear: Joi.number().integer().min(0).max(new Date().getFullYear())
});