import { IResult } from "../interfaces/IResult";

export interface IMessageErrorApi {
    path: string;
    message: string;
}

export function messageErrorApi(error: IResult, controlName: string): IMessageErrorApi | null {
    const include = error.message.includes(controlName);
    console.log("include", include);
    if (include) return { path: controlName, message: error.message };
    return null;
}

// obtener el path

export function pathApi(error: IResult){
    
}