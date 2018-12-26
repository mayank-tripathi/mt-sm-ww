import { BaseErrorSubstitutions } from "zftsbqoz1g/Public/UI/Errors/BaseErrorSubstitutions";
import { ErrorSubstitutionsType } from "zftsbqoz1g/Public/UI/Errors/Types/ErrorSubstitutionsType";
import { IErrorParameters } from "Common/Errors/Interfaces/IErrorParameters";

export const ErrorSubstitutions: ErrorSubstitutionsType<IErrorParameters> = {
  ...BaseErrorSubstitutions,
  error: undefined,
  requestMessageRequired: undefined
};