import Joi from "joi";
import validate from "../../../utils/validate";

const buyOrderSchema = Joi.object({
    watchId : Joi.number().required().messages({
        "any.required": "watch is required"
    }),
    walletId : Joi.number().required().messages({
        "any.required":"wallet is required"
    }),
    price : Joi.number().required().greater(0).messages({
        "number.greater":"Price Must be More Than 0",
        "any.required": "Please Insert Price"
    }),
})

const saleOrderSchema = Joi.object({
    inventoryId : Joi.number().required().messages({
        "any.required": "Please Select Your Inventory"
    }),
    price : Joi.number().required().greater(0).messages({
        "number.greater":"Price Must be More Than 0",
        "any.required": "Please Insert Price"
    }),
})

const validateBuyOrder = (input) => validate(buyOrderSchema)(input)
const validateSaleOrder = (input) => validate(saleOrderSchema)(input)

export { validateBuyOrder , validateSaleOrder }