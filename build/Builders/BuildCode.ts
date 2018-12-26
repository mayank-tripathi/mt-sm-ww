import { buildHelper } from "../Utils/BuildHelper";
import { buildModeHelper } from "../Utils/BuildModeHelper";

// tslint:disable:no-floating-promises
(async () => {

  buildModeHelper.showStartInfo();
  await buildHelper.updateJsonSchemas();

  // App, App (UMD), Docs
  buildHelper.removeDistDirectory();

  // App
  buildHelper.copyAppFavicon();
  buildHelper.generateAppLocalisationMessages();

  // App (UMD)
  // buildHelper.copyAppUmdFavicon();
  // buildHelper.generateAppUmdLocalisationMessages();

  // Docs
  // buildHelper.copyDocsFavicon();
  // buildHelper.generateDocsLocalisationMessages();
  // buildHelper.generateDocumentation();

  // , "Application (UMD)", "Documentation"
  buildModeHelper.runWebpack(["Application"], () => buildModeHelper.showRunTimeSettingsJsonSample());
})();