import { HttpErrorResponse } from "@angular/common/http";
import { IDataUser, IResult } from "../interfaces/IResult";

export function HanlderError(err: unknown): IResult<IDataUser> {
    if (err instanceof HttpErrorResponse) {
        if (err.error instanceof ProgressEvent) {
            return {
                success: false,
                message: "Network Error",
                code: 500
            }
        }
        return err.error as IResult<IDataUser>;
    }

    if (err instanceof ErrorEvent) {
        return {
            success: false,
            code: 400,
            message: "Client side error"
        }
    }

    return {
        success: false,
        code: 500,
        message: 'Internal server error'
    }
}