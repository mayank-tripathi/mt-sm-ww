import { DockerfileGeneratorRelease } from "../Generators/Dockerfile/DockerfileGenerator.release";
import { IBuildModeInfo } from "../Interfaces/IBuildModeInfo";
import { WebpackGeneratorRelease } from "../Generators/Webpack/WebpackGenerator.release";

const buildModeInfoRelease: IBuildModeInfo = {
  buildMode: "release",
  webpackGenerator: new WebpackGeneratorRelease(),
  dockerfileGenerator: new DockerfileGeneratorRelease()
};

export default buildModeInfoRelease;