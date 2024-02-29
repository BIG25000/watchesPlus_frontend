import joi from "joi";
import validate from "../../../utils/validate";

const loginSchema = joi.object({
  email: joi.string().required().trim().email({ tlds: false }).messages({
    "any.required": "email address is required",
    "string.empty": "email address is required",
  }),
  password: joi
    .string()
    .pattern(/^[a-zA-Z0-9]{6,20}$/)
    .required()
    .messages({
      "any.required": "password is required",
      "string.empty": "password is required",
      "string.pattern.base":
        "password must be 6-20 characters and contain only alphabet and number",
    }),
});
const validateLogin = (input) => validate(loginSchema)(input);

export default validateLogin;
