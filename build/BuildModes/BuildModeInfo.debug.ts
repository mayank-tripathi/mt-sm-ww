import { DockerfileGeneratorDebug } from "../Generators/Dockerfile/DockerfileGenerator.debug";
import { IBuildModeInfo } from "../Interfaces/IBuildModeInfo";
import { WebpackGeneratorDebug } from "../Generators/Webpack/WebpackGenerator.debug";

const buildModeInfoDev: IBuildModeInfo = {
  buildMode: "debug",
  webpackGenerator: new WebpackGeneratorDebug(),
  dockerfileGenerator: new DockerfileGeneratorDebug()
};

export default buildModeInfoDev;