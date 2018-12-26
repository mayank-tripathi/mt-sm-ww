import { BaseDebugRunTimeSettings } from "zftsbqoz1g/Private/Build/DebugRunTime/BaseDebugRunTimeSettings";
import { IRunTimeSettings } from "../../src/Common/RunTime/Interfaces/IRunTimeSettings";

/** Application specific runtime settings (used in debug mode only) */
export const DebugRunTimeSettings: IRunTimeSettings = {
  ...BaseDebugRunTimeSettings
};