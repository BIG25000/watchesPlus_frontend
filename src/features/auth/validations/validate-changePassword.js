import joi from "joi";
import validate from "../../../utils/validate";

const changePasswordSchema = joi.object({
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
  confirmPassword: joi.string().required().valid(joi.ref("password")).messages({
    "any.required": "confirm password is required",
    "string.empty": "confirm password is required",
    "any.only": "password and confirm password did not match",
  }),
});
const validateChangePassword = (input) => validate(changePasswordSchema)(input);

export default validateChangePassword;
