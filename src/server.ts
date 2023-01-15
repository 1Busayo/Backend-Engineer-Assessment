import express, { Express, NextFunction, Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { knex } from "./utils/dbconn";



import { walletRoutes } from "./routes";
import { handleError, unknownResourceError } from "./utils/error";

knex.queryBuilder();

dotenv.config({});

export const app: Express = express();



app.use(cors());
app.use(express.json());
app.use(walletRoutes);




// capture all 404 errors
app.use(function (request: Request, response: Response) {
  throw unknownResourceError(
    `The route you are trying to reach (${request.path}) does not exist`
  );
});

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  handleError(err, res);
});

const PORT =process.env.PORT

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});