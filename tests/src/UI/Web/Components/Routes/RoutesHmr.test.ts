import Routes from "UI/Web/Components/Routes";
import RoutesHmr from "UI/Web/Components/Routes/RoutesHmr";

describe("RoutesHmr", () => {

  it("constructor", () => {
    const routesHmr = new RoutesHmr({});
    expect(routesHmr).toBeInstanceOf(Routes);
  });
});