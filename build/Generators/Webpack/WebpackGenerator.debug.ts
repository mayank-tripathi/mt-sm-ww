import { BaseWebpackGenerator } from "zftsbqoz1g/Private/Build/Generators/Webpack/BaseWebpackGenerator";
import { Configuration } from "webpack";
import { Constants } from "../../Constants";
import { DebugRunTimeSettings } from "../../DebugRunTime/DebugRunTimeSettings";
import { IBaseBuildTimeSettings } from "zftsbqoz1g/Private/Build/Interfaces/IBaseBuildTimeSettings";
import { IBuildTimeSettings } from "../../Interfaces/IBuildTimeSettings";
import { IConstants } from "../../Interfaces/IConstants";
import { IRunTimeSettings } from "../../../src/Common/RunTime/Interfaces/IRunTimeSettings";

// See https://webpack.js.org/configuration
export class WebpackGeneratorDebug extends BaseWebpackGenerator<IConstants, IBuildTimeSettings, IRunTimeSettings> {

  public constructor() {
    super(Constants, "debug", DebugRunTimeSettings);
  }

  /**
   * Method to apply build specific settings to application
   * @param webpackConfiguration Default webpack configuration
   */
  protected applyAppBuildSpecificSettings(webpackConfiguration: Configuration): Configuration {
    return this.applyBuildSpecificSettings(webpackConfiguration);
  }

  /**
   * Method to apply build specific settings to application (UMD)
   * @param webpackConfiguration Default webpack configuration
   */
  protected applyAppUmdBuildSpecificSettings(webpackConfiguration: Configuration): Configuration {
    return this.applyBuildSpecificSettings(webpackConfiguration);
  }

  /**
   * Method to apply build specific settings to documentation
   * @param webpackConfiguration Default webpack configuration
   */
  protected applyDocsBuildSpecificSettings(webpackConfiguration: Configuration): Configuration {
    return this.applyBuildSpecificSettings(webpackConfiguration);
  }

  /**
   * Method to get build time settings
   * @param baseBuildTimeSettings All minimally required build time settings that are set by default
   */
  protected getBuildTimeSettings(baseBuildTimeSettings: IBaseBuildTimeSettings): IBuildTimeSettings {
    return baseBuildTimeSettings;
  }

  private applyBuildSpecificSettings(webpackConfiguration: Configuration): Configuration {

    webpackConfiguration.resolve = {
      ...webpackConfiguration.resolve,
      alias: {
        Api: this._constants.API_DIR_FULL_PATH,
        BusinessLogic: this._constants.BUSINESS_LOGIC_DIR_FULL_PATH,
        Common: this._constants.COMMON_DIR_FULL_PATH,
        node_modules: this._constants.NODE_MODULES_FULL_PATH,
        UI: this._constants.UI_DIR_FULL_PATH
      }
    };

    return webpackConfiguration;
  }
}