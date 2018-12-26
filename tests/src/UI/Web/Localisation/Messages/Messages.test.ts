import { assertLocalisationMessages } from "zftsbqoz1g/Private/Tests/CommonTestUtils";
import { Constants } from "../../../../../../build/Constants";
import { MessageParametersTest } from "./MessageParametersTest";

describe("Messages", () => {

  it("Have correct placeholders for message parameters", () => {
    assertLocalisationMessages(MessageParametersTest, Constants.LOCALISATION_MESSAGES_DIR_FULL_PATH);
  });
});