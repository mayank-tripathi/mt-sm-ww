import * as React from "react";
import RoutesHmr from "UI/Web/Components/Routes/RoutesHmr";
import { BrowserRouter } from "react-router-dom";
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

render(
  <BrowserRouter>
    <RoutesHmr />
  </BrowserRouter>,
  document.getElementById("app"));