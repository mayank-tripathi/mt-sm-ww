import * as React from "react";
import DocumentationHmr from "zftsbqoz1g/Public/UI/Web/Components/Documentation/DocumentationHmr";
import { IComponent } from "zftsbqoz1g/Public/UI/Web/Interfaces/IComponent";
import { IComponentExample } from "zftsbqoz1g/Public/UI/Web/Interfaces/IComponentExample";
import { render } from "react-dom";
import { RunTimeSettingsProvider } from "Common/RunTime/RunTimeSettingsProvider";
import "UI/Web/Styles/scss/custom-styles.scss";

try {
  // Validate runtime settings
  new RunTimeSettingsProvider().getRunTimeSettingsWrapper().validateRunTimeSettings();
} catch (error) {
  alert(error.message);
  throw error;
}

// @ts-ignore - process.env.COMPONENTS_DATA_JSON_FULL_PATH is set at runtime by webpack's EnvironmentPlugin
const components: ReadonlyArray<IComponent<IComponentExample>> = require(process.env.COMPONENTS_DATA_JSON_FULL_PATH); // tslint:disable-line:no-var-requires

render(<DocumentationHmr components={components} />, document.getElementById("app"));