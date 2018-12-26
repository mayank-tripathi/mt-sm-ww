import { BaseDockerfileGenerator } from "zftsbqoz1g/Private/Build/Generators/Dockerfile/BaseDockerfileGenerator";
import { Constants } from "../../Constants";
import { IConstants } from "../../Interfaces/IConstants";

export class DockerfileGeneratorRelease extends BaseDockerfileGenerator<IConstants> {

  public constructor() {
    super(Constants, "release");
  }

  /**
   * Method to apply build specific settings
   * @param dockerfile Default docker file
   */
  protected applyBuildSpecificSettings(dockerfile: string[]): string[] {
    return dockerfile;
  }
}