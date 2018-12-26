import { BaseLocalisation } from "zftsbqoz1g/Public/UI/Localisation/BaseLocalisation";
import { Localisation } from "UI/Localisation/Localisation";

describe("Localisation", () => {

  it("constructor", () => {
    const localisation = new Localisation();
    expect(localisation).toBeInstanceOf(BaseLocalisation);
  });
});