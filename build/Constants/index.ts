import { IConstants } from "../Interfaces/IConstants";
import { rootDirJoin } from "zftsbqoz1g/Public/Common/Utils/PathUtils";

/** Application specific constants */
export const Constants: IConstants = {

  ///////////////////////
  // Project structure //
  ///////////////////////

  /** Full path to Api directory, e.g. rootDirJoin("src/Api") */
  API_DIR_FULL_PATH: rootDirJoin("src/Api"),
  /** Full path to BusinessLogic directory, e.g. rootDirJoin("src/BusinessLogic") */
  BUSINESS_LOGIC_DIR_FULL_PATH: rootDirJoin("src/BusinessLogic"),
  /** Full path to Common directory, e.g. rootDirJoin("src/Common") */
  COMMON_DIR_FULL_PATH: rootDirJoin("src/Common"),
  /** Full path to node modules directory, e.g. rootDirJoin("node_modules") */
  NODE_MODULES_FULL_PATH: rootDirJoin("node_modules"),
  /** Full path to UI directory, e.g. rootDirJoin("src/UI") */
  UI_DIR_FULL_PATH: rootDirJoin("src/UI"),

  /////////////////
  // Entry files //
  /////////////////

  /** Full path to application entry file, e.g. rootDirJoin("src/UI/Web/Components/App/App.tsx") */
  APP_ENTRY_FILE_FULL_PATH: rootDirJoin("src/UI/Web/Components/App/App.tsx"),
  /** Full path to application (UMD) entry file, e.g. rootDirJoin("src/UI/Web/UMD/index.tsx") */
  APP_UMD_ENTRY_FILE_FULL_PATH: rootDirJoin("src/UI/Web/UMD/index.tsx"),
  /** Full path to documentation entry file, e.g. rootDirJoin("documentation/index.tsx") */
  DOCS_ENTRY_FILE_FULL_PATH: rootDirJoin("documentation/index.tsx"),

  //////////
  // HTML //
  //////////

  /** Full path to application index.html template, e.g. rootDirJoin("build/Html/index.html") */
  APP_INDEX_HTML_TEMPLATE_FULL_PATH: rootDirJoin("build/Html/index.html"),
  /** Application title */
  APP_TITLE: "Mayank &hearts; Shatakshi",
  /** Full path to application (UMD) index.html template, e.g. rootDirJoin("src/UI/Web/UMD/index.html") */
  APP_UMD_INDEX_HTML_TEMPLATE_FULL_PATH: rootDirJoin("src/UI/Web/UMD/index.html"),
  /** Application (UMD) title */
  APP_UMD_TITLE: "Mayank &hearts; Shatakshi",
  /** Full path to documentation index.html template, e.g. rootDirJoin("build/Html/index.html") */
  DOCS_INDEX_HTML_TEMPLATE_FULL_PATH: rootDirJoin("build/Html/index.html"),
  /** Documentation title */
  DOCS_TITLE: "Mayank &hearts; Shatakshi (Documentation)",
  /** Full path to favicon.ico, e.g. rootDirJoin("node_modules/ui-common/Public/UI/Web/Styles/images/favicon.ico") */
  FAVICON_FULL_PATH: rootDirJoin("src/UI/Web/Styles/images/favicon.ico"),

  //////////////////////////////////////////////////////
  // Generation of documentation for React components //
  //////////////////////////////////////////////////////

  /** Full path to ComponentsData.json where components' metadata is saved, e.g. rootDirJoin("documentation/ComponentsData/ComponentsData.json") */
  COMPONENTS_DATA_JSON_FULL_PATH: rootDirJoin("documentation/ComponentsData/ComponentsData.json"),
  /** Full path to directory that contains all React components, e.g. rootDirJoin("src/UI/Web/Components") */
  COMPONENTS_DIR_FULL_PATH: rootDirJoin("src/UI/Web/Components"),
  /** Full path to directory that contains examples for React components, e.g. rootDirJoin("documentation/Examples") */
  DOCS_EXAMPLES_DIR_FULL_PATH: rootDirJoin("documentation/Examples"),
  /** An array of component names that need to be excluded from documentation, e.g. ["App"] */
  DOCS_EXCLUDED_COMPONENT_NAMES: ["App"],

  ///////////
  // Build //
  ///////////

  /** Parameter name for build mode, e.g. mode */
  BUILD_MODE_PARAMETER_NAME: "mode",
  /** Prefix to load build mode details. Build mode code that is specified in "mode" command line parameter is appended to it, e.g. rootDirJoin("build/BuildModes/BuildModeInfo.") */
  BUILD_MODE_INFO_FILE_FULL_PATH_PREFIX: rootDirJoin("build/BuildModes/BuildModeInfo."),

  //////////////////
  // Build output //
  //////////////////

  /** Full path to the main build directory, e.g. rootDirJoin("dist") */
  DIST_DIR_FULL_PATH: rootDirJoin("dist"),
  /** Name of the main build directory, e.g. dist */
  DIST_DIR_NAME: "dist",
  /** Hash algorithm. One of the following: md5, sha256, sha512 */
  HASH_ALGORITHM: "md5",
  /** Digest of all passed data to be hashed. One of the following: base64, hex, latin1 */
  HASH_DIGEST: "hex",
  /** Length of file content hash to be appended to output files, e.g. 8 */
  HASH_LENGTH: 8,
  /** Hash prefix, e.g. -hash- (filename-hash-XXXXXXXX.ext) */
  HASH_PREFIX: "-hash-",
  /** Name of application output sub-directory, e.g. app */
  OUTPUT_APP_DIR_NAME: "app",
  /** Name of application (UMD) output sub-directory, e.g. app_umd */
  OUTPUT_APP_UMD_DIR_NAME: "app_umd",
  /** Name of CSS output sub-directory, e.g. css */
  OUTPUT_CSS_DIR_NAME: "css",
  /** Name of CSS output file, e.g. mayank-wedding-website.css */
  OUTPUT_CSS_FILE_NAME: "mayank-wedding-website.css",
  /** Name of documentation output sub-directory, e.g. docs */
  OUTPUT_DOCS_DIR_NAME: "docs",
  /** Name of favicon.ico output file, e.g. favicon.ico */
  OUTPUT_FAVICON_FILE_NAME: "favicon.ico",
  /** Name of fonts output sub-directory, e.g. fonts */
  OUTPUT_FONTS_DIR_NAME: "fonts",
  /** Name of images output sub-directory, e.g. images */
  OUTPUT_IMAGES_DIR_NAME: "images",
  /** Name of index.html output file, e.g. index.html */
  OUTPUT_INDEX_HTML_FILE_NAME: "index.html",
  /** Name of javascript output sub-directory, e.g. scripts */
  OUTPUT_JS_DIR_NAME: "scripts",
  /** Name of javascript output file, e.g. mayank-wedding-website.js. Build will use it as a base for chunk file names (runtime, vendors, main) */
  OUTPUT_JS_FILE_NAME: "mayank-wedding-website.js",
  /** Name of output sub-directory for localisation messages, e.g. messages */
  OUTPUT_LOCALISATION_MESSAGES_DIR_NAME: "messages",
  /** Name of styles output sub-directory (images, fonts, etc.), e.g. styles */
  OUTPUT_STYLES_DIR_NAME: "styles",
  /** Placeholder for JSON with runtime settings, e.g. runTimeSettingsJsonPlaceholder */
  RUNTIME_SETTINGS_JSON_PLACEHOLDER: "runTimeSettingsJsonPlaceholder",

  ///////////////////
  // Debug runtime //
  ///////////////////

  /** Application port number */
  APP_PORT: 8001,
  /** Application (UMD) port number */
  APP_UMD_PORT: 8002,
  /** Documentation port number */
  DOCS_PORT: 8003,

  ////////////
  // Docker //
  ////////////

  /** Name of docker node image to use as a base, e.g. node:8.9.3-alpine */
  DOCKER_NODE_IMAGE_NAME: "node:8.9.3-alpine",
  /** Full path to dockerfile, e.g. rootDirJoin("dockerfile") */
  DOCKERFILE_FULL_PATH: rootDirJoin("dockerfile"),

  //////////////////
  // Localisation //
  //////////////////

  /** Relative URL format to get messages for locale. It must contain {locale} placeholder, e.g. /messages/{locale}.json */
  GET_MESSAGES_FOR_LOCALE_RELATIVE_URL_FORMAT: "/messages/{locale}.json",
  /** Full path to directory that contains localisation messages, e.g. rootDirJoin("src/UI/Localisation/Messages") */
  LOCALISATION_MESSAGES_DIR_FULL_PATH: rootDirJoin("src/UI/Localisation/Messages"),

  ///////////////////////////
  // Project configuration //
  ///////////////////////////

  /** Full path to package.json, e.g. rootDirJoin("package.json") */
  PACKAGE_JSON_FULL_PATH: rootDirJoin("package.json"),
  /** Full path to package.schema.json where package.json JSON schema is saved, e.g. rootDirJoin("schemas/package.schema.json") */
  PACKAGE_JSON_SCHEMA_FULL_PATH: rootDirJoin("schemas/package.schema.json"),
  /** Full path to tsconfig.json, e.g. rootDirJoin("tsconfig.json") */
  TSCONFIG_JSON_FULL_PATH: rootDirJoin("tsconfig.json"),
  /** Full path to tsconfig.schema.json where tsconfig.json JSON schema is saved, e.g. rootDirJoin("schemas/tsconfig.schema.json") */
  TSCONFIG_JSON_SCHEMA_FULL_PATH: rootDirJoin("schemas/tsconfig.schema.json"),
  /** Full path to tslint.schema.json where tslint.json JSON schema is saved, e.g. rootDirJoin("schemas/tslint.schema.json") */
  TSLINT_JSON_SCHEMA_FULL_PATH: rootDirJoin("schemas/tslint.schema.json"),

  //////////
  // MobX //
  //////////

  /** Full path to MobX configuration file, e.g. rootDirJoin("src/Private/Build/StartUp/MobXConfiguration.ts") */
  MOBX_CONFIGURATION_FILE_FULL_PATH: rootDirJoin("node_modules/zftsbqoz1g/Private/Build/StartUp/MobXConfiguration.js")
};