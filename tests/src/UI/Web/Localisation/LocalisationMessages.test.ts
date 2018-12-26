import { BaseLocalisationMessages } from "zftsbqoz1g/Public/UI/Localisation/BaseLocalisationMessages";
import { en } from "UI/Localisation/Messages/en";
import { LocalisationMessages } from "UI/Localisation/LocalisationMessages";

describe("LocalisationMessages", () => {

  it("constructor", () => {
    const localisationMessages = new LocalisationMessages(en.allMessages);
    expect(localisationMessages).toBeInstanceOf(BaseLocalisationMessages);
  });
});