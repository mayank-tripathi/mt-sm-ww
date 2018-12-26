import { BrowserRunTimeSettingsWrapper as CommonBrowserRunTimeSettingsWrapper } from "zftsbqoz1g/Public/Common/RunTime/Implementations/BrowserRunTimeSettingsWrapper";
import { IRunTimeSettings } from "../Interfaces/IRunTimeSettings";

/** Wrapper to provide browser's runtime settings */
export class BrowserRunTimeSettingsWrapper extends CommonBrowserRunTimeSettingsWrapper {

  /** Method to provide browser's runtime settings */
  public getRunTimeSettings(): IRunTimeSettings {
    return super.getRunTimeSettings();
  }

  /** Method to validate runtime settings */
  public validateRunTimeSettings(): void {
    super.validateRunTimeSettings();
  }
}