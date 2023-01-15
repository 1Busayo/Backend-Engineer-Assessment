
import { celebrate } from "celebrate";
import { Request, Response, Router, NextFunction } from "express";
import protect from "../middlewares/auth";
import UserController from "../controllers/user.controller";

import { createUserSchema, fundSchema, transferSchema, walletSchema, withdrawSchema } from "../utils/validation-schema";
import WalletController from "../controllers/wallet.controller";




const Route: Router = Router();

Route.get("/", (req: Request, res: Response) => {
  res
    .status(200)
    .json({
      message: "Wallet API",

    })
    .end();
});


Route.post('/createuser', protect , celebrate({ body: createUserSchema }),async (req: Request, res: Response) => {

  const user = await new UserController().createUser(req.body)
  res.send(user);


});

Route.post('/createwallet', protect , celebrate({ body: walletSchema }),async (req: Request, res: Response) => {

  const wallet = await new WalletController().createWallet(req.body)
  res.send(wallet);


});


Route.post('/fund', protect , celebrate({ body: fundSchema }),async (req: Request, res: Response) => {

  const wallet = await new WalletController().fundWallet(req.body)
  res.send(wallet);


});

Route.post('/transfer', protect , celebrate({ body: transferSchema }),async (req: Request, res: Response) => {

  const wallet = await new WalletController().transferWallet(req.body)
  res.send(wallet);


});


Route.post('/withdraw', protect , celebrate({ body: withdrawSchema }),async (req: Request, res: Response) => {

  const wallet = await new WalletController().withdrawfromWallet(req.body)
  res.send(wallet);


});


export { Route };