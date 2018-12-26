import * as React from "react";
import ComponentWithLocalisationTest from "./ComponentWithLocalisationTest";
import { assertBaseComponent, assertHtml } from "zftsbqoz1g/Private/Tests/CommonTestUtils";

describe("ComponentWithLocalisation", () => {

  describe("constructor", () => {

    it("Sets BaseComponent properties correctly", async () => {
      await assertBaseComponent(new ComponentWithLocalisationTest(), true, false);
    });
  });

  describe("render", () => {

    it("Renders HTML correctly", () => {
      assertHtml(<ComponentWithLocalisationTest />, "<div>ComponentWithLocalisationTest</div>");
    });
  });
});