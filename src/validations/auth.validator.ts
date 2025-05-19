import { NextFunction, Request, Response } from "express";
import Joi, { ObjectSchema } from "joi";

const registerValidator: ObjectSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
  role: Joi.string().valid("admin", "user"),
});

const validateBody = (schema: ObjectSchema) => {
  return (req: Request, res: Response, next: NextFunction): void => {
    const { error } = schema.validate(req.body);
    if (error) {
      res.status(400).json({
        status: false,
        message: "Validation fail",
        error: error.details[0].message,
      });
      return;
    }

    next();
  };
};
export { registerValidator, validateBody };
