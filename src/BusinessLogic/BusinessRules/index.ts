import { isNullOrWhiteSpace } from "zftsbqoz1g/Public/Common/Utils/StringUtils";
import { ErrorHelper } from "Common/Errors/ErrorHelper";
import { FrameworkError } from "zftsbqoz1g/Public/Common/Errors/Base/FrameworkError";
import { IErrorParameters } from "Common/Errors/Interfaces/IErrorParameters";
import { IErrorTypes } from "Common/Errors/Interfaces/IErrorTypes";

// tslint:disable:no-any
export function validateRequestMessage(requestMessage: string): FrameworkError<IErrorParameters, IErrorTypes, any, any> | undefined {
  return isNullOrWhiteSpace(requestMessage)
    ? ErrorHelper.getFrameworkError("validationError", "requestMessageRequired", [])
    : undefined;
}