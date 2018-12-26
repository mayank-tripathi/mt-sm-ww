import { BaseLocalisation } from "zftsbqoz1g/Public/UI/Localisation/BaseLocalisation";
import { ErrorSubstitutions } from "UI/Errors/ErrorSubstitutions";
import { IErrorParameters } from "Common/Errors/Interfaces/IErrorParameters";
import { IMessageParameters } from "UI/Localisation/Interfaces/IMessageParameters";

export class Localisation extends BaseLocalisation<IMessageParameters, IErrorParameters> {

  public constructor() {

    // Removed semicolon because code coverage reports "branch not covered" due to the way how typescript is transpiled to javascript
    super(ErrorSubstitutions) // tslint:disable-line:semicolon
  }
}