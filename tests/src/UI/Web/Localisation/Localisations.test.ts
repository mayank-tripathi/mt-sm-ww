import { assertILocalisations } from "zftsbqoz1g/Private/Tests/CommonTestUtils";
import { Constants } from "../../../../../build/Constants";
import { Localisations } from "UI/Localisation/Localisations";

describe("Localisations", () => {

  it("Contains all locales/messages", () => {
    assertILocalisations(Localisations, Constants.LOCALISATION_MESSAGES_DIR_FULL_PATH);
  });
});