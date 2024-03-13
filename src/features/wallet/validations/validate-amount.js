import joi from "joi";
import validate from "../../../utils/validate";

const amountSchema = joi.object({
  amount: joi
    .number()
    .min(100) // Minimum value allowed
    .max(150000) // Maximum value allowed
    .required()
    .messages({
      "any.required": "amount is required",
      "string.empty": "amount is required",
      "number.base": "amount must be a valid number",
      "number.min": "amount must be greater than or equal to 100",
      "number.max": "amount must be less than or equal to 150000",
    }),
});

const validateAmount = (input) => validate(amountSchema)(input);

export default validateAmount;
