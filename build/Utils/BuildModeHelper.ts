import { BaseBuildModeHelper } from "zftsbqoz1g/Private/Build/Utils/BaseBuildModeHelper";
import { Constants } from "../Constants";
import { DebugRunTimeSettings } from "../DebugRunTime/DebugRunTimeSettings";
import { IBuildModeInfo } from "../Interfaces/IBuildModeInfo";
import { IConstants } from "../Interfaces/IConstants";
import { IRunTimeSettings } from "../../src/Common/RunTime/Interfaces/IRunTimeSettings";

export const buildModeHelper: BaseBuildModeHelper<IConstants, IBuildModeInfo, IRunTimeSettings> = new BaseBuildModeHelper(Constants, DebugRunTimeSettings);