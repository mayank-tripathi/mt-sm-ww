import { ApiSettings } from "Api/Implementations/ApiSettings";
import { BaseApiSettings } from "zftsbqoz1g/Public/Api/Implementations/BaseApiSettings";
import { IApiSettings } from "Api/Interfaces/IApiSettings";

describe("ApiSettings", () => {

  it("constructor", () => {
    const apiSettings: IApiSettings = new ApiSettings();
    expect(apiSettings).toBeInstanceOf(BaseApiSettings);
  });
});