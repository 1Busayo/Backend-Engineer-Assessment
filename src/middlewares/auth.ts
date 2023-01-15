import { NextFunction, Request, Response } from "express";
import asyncHandler from "express-async-handler";
import { authenticationError, badRequestError } from "./../utils/error";



const protect = asyncHandler(
  async (request: Request, response: Response, next: NextFunction) => {
    const token = await getAuthToken(request, response);

    next();
  }
);


async function getAuthToken(request: Request, response: Response) {
  let token = request.headers["authkey"];
  const msg = "Auth token is required"
  if (!token) {
    response.status(401).json({ msg });
    throw authenticationError("Auth token is required");

  }
  if (token == "") {

    throw authenticationError("Auth token is required");
  }
  return token;
}



export default protect;
