import { Router } from "express";
import { Route } from "./register.route";


const  walletRoutes: Router = Router();

walletRoutes.use( Route);




export { walletRoutes };