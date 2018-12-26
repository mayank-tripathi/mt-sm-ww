import { BaseRunTimeSettingsProvider } from "zftsbqoz1g/Public/Common/RunTime/Implementations/Base/BaseRunTimeSettingsProvider";
import { BrowserRunTimeSettingsWrapper } from "./Implementations/BrowserRunTimeSettingsWrapper";
import { IRunTimeSettings } from "./Interfaces/IRunTimeSettings";
import { IRunTimeSettingsWrapper } from "zftsbqoz1g/Public/Common/RunTime/Interfaces/IRunTimeSettingsWrapper";

/** Class that provides runtime settings wrappers */
export class RunTimeSettingsProvider extends BaseRunTimeSettingsProvider<IRunTimeSettings> {

  /** Method to provide runtime settings wrapper */
  public getRunTimeSettingsWrapper(): IRunTimeSettingsWrapper<IRunTimeSettings> {

    /** TODO: Add support for mobile platforms */
    return new BrowserRunTimeSettingsWrapper();
  }
}