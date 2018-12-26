import { BaseErrorHelper } from "zftsbqoz1g/Public/Common/Errors/Base/BaseErrorHelper";
import { IErrorParameters } from "Common/Errors/Interfaces/IErrorParameters";
import { IErrorTypes } from "Common/Errors/Interfaces/IErrorTypes";

export class ErrorHelperClass extends BaseErrorHelper<IErrorParameters, IErrorTypes> { }

/** Error helper to create framework errors */
export const ErrorHelper = new ErrorHelperClass();