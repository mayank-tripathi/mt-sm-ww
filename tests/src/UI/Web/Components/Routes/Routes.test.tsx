import * as React from "react";
import * as sinon from "sinon";
import Base from "UI/Web/Components/Base";
import Routes from "UI/Web/Components/Routes";
import { assertBaseComponent, getMount, getSpecificProps, stubComponentRender, unstub } from "zftsbqoz1g/Private/Tests/CommonTestUtils";
import { Localisation } from "UI/Localisation/Localisation";
import { MemoryRouter } from "react-router";

describe("Routes", () => {

  let localisationStub: sinon.SinonStub;

  beforeEach(() => localisationStub = sinon.stub(Localisation.prototype, "getMessagesForLocale"));
  afterEach(() => unstub(localisationStub));

  function getRoutes(): Routes {
    return new Routes({});
  }

  describe("constructor", () => {

    it("Sets BaseComponent properties correctly", async () => {
      await assertBaseComponent(getRoutes(), true, false);
    });
  });

  describe("componentDidMount", () => {

    it("componentDidMount calls localisation.getMessagesForLocale() method", async () => {
      const routes: Routes = getRoutes();
      await routes.componentDidMount();
      expect(localisationStub.calledOnce).toBe(true);
      expect(localisationStub.lastCall.args[0]).toBeUndefined();
    });
  });

  describe("render", () => {

    it("Sets props of child components correctly", () => {

      const wrapper = getMount(
        <MemoryRouter>
          <Routes />
        </MemoryRouter>);

      const header = wrapper.find(Header);
      expect(header.props()).toEqual({
        breakpointToExpand: "sm"
      });

      const routes = wrapper.find(Route);
      expect(routes).toHaveLength(1);

      expect(getSpecificProps(routes.at(0), ["exact", "path", "component"])).toEqual({
        exact: true,
        path: "/",
        component: Base
      });
    });
  });

  describe("Routing", () => {

    let baseStub: sinon.SinonStub;

    beforeEach(() => baseStub = stubComponentRender(Base, "Base"));
    afterEach(() => unstub(baseStub));

    it("Redirects to Base component for path '/'", () => {
      const wrapper = getMount(
        <MemoryRouter initialEntries={["/"]} initialIndex={1}>
          <Routes />
        </MemoryRouter>);
      expect(baseStub.calledOnce).toBe(true);
      expect(wrapper.find(Base)).toHaveLength(1);
    });

    it("Does not redirect to Base component for path '/random'", () => {
      const wrapper = getMount(
        <MemoryRouter initialEntries={["/random"]} initialIndex={1}>
          <Routes />
        </MemoryRouter>);
      expect(baseStub.called).toBe(false);
      expect(wrapper.find(Base)).toHaveLength(0);
    });
  });
});