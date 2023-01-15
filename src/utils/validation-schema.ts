import { Joi } from "celebrate";


export const createUserSchema = Joi.object().keys({
    username: Joi.string().required(),
    password: Joi.string().required(),
  });
  

export const walletSchema = Joi.object().keys({
    balance: Joi.number().optional(),
    user_id: Joi.number().required(),
  });
  
  export const fundSchema = Joi.object().keys({
    amount: Joi.number().required(),
    walletid: Joi.number().required(),
  });
  export const transferSchema = Joi.object().keys({
    amount: Joi.number().required(),
    receiverwalletid: Joi.number().required(),
    senderwalletid: Joi.number().required(),
  });
  export const withdrawSchema = Joi.object().keys({
    amount: Joi.number().required(),
    walletid: Joi.number().required(),
  });
  