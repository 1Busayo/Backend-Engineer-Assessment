import { Response } from "express";
import { CelebrateError, isCelebrateError } from "celebrate";

export const badRequestError = (message: string): ErrorHandler => {
    return new ErrorHandler(400, "InvalidData", message);
};


export const authenticationError = (message: string): ErrorHandler => {
    return new ErrorHandler(401, "InvalidToken", message);
};

export const notAcceptableError = (message: string): ErrorHandler => {
    return new ErrorHandler(406, "Not Acceptable", message);
};

export const unknownResourceError = (message: string): ErrorHandler => {
    return new ErrorHandler(404, "UnknownResource", message);
};

export const notImplementedError = (message: string): ErrorHandler => {
    return new ErrorHandler(501, "NotImplementedError", message);
};

export class ErrorHandler extends Error {
    statusCode: number;
    errorCode: string;
    message: string;

    constructor(statusCode: number, errorCode: string, message: string) {
        super(message);
        // Set the prototype explicitly.
        // https://github.com/Microsoft/TypeScript/wiki/Breaking-Changes#extending-built-ins-like-error-array-and-map-may-no-longer-work
        Object.setPrototypeOf(this, ErrorHandler.prototype);
        this.statusCode = statusCode;
        this.errorCode = errorCode;
        this.message = message;
    }
}

const handleKnownExceptions = (error: ErrorHandler, response: Response) => {

    const { statusCode, errorCode, message } = error;
    response
        .status(statusCode)
        .json({ errorMessage: `${errorCode} | ${message}` })
        .end();
};

const handleUnknownExceptions = (error: Error, response: Response) => {

    return response
        .status(500)
        .json({ errorMessage: `${error.name} | ${error.message}` })
        .end();
};

export const handleError = (
    error: ErrorHandler | Error | CelebrateError,
    response: Response
) => {
    console.log("handleError");

    if (isCelebrateError(error)) {
        const message = formatCelebrateErrors(error as CelebrateError);
        return response.status(400).json({ errorMessage: message });
    }

    error instanceof ErrorHandler
        ? handleKnownExceptions(error, response)
        : handleUnknownExceptions(error, response);
};


function formatCelebrateErrors(error: CelebrateError) {
    let message = "";
    error.details.forEach((validationError) => {
        if (message) {
            message += "\n";
        }
        message += validationError.message;
    });
    return message;
}