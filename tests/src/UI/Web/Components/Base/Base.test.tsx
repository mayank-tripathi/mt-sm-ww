import * as React from "react";
import Base from "UI/Web/Components/Base";
import { assertHtml, getShallow, stubComponentRenderWithoutProps, unstubComponentRenderWithoutProps } from "zftsbqoz1g/Private/Tests/CommonTestUtils";

describe("Base", () => {

  describe("render", () => {

    beforeEach(() => stubComponentRenderWithoutProps(Base));
    afterEach(() => unstubComponentRenderWithoutProps(Base));

    it("Renders HTML correctly", () => {
      assertHtml(<Base />, "<Base></Base>");
    });

    it("Sets props of child components correctly", () => {
      const wrapper = getShallow(<Base />);
      expect(wrapper.find(Base).props()).toEqual({});
    });
  });
});