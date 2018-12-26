import { IBaseMessageParameters } from "zftsbqoz1g/Public/UI/Localisation/Interfaces/IBaseMessageParameters";
import { IErrorParameters } from "Common/Errors/Interfaces/IErrorParameters";

export interface IMessageParameters extends IBaseMessageParameters, IErrorParameters {
  readonly message1: undefined;
  readonly message2: { readonly param1: number };
  readonly requestMessageLabel: undefined;

  readonly requestMessageSubmitTitle: undefined;
  readonly title: undefined;
}