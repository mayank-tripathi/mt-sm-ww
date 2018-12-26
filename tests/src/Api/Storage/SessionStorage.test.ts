import { BaseSessionStorage } from "zftsbqoz1g/Public/Api/Storage/BaseSessionStorage";
import { SessionStorage } from "Api/Storage/SessionStorage";
import { StorageMock, stubSessionStorage, unstub } from "zftsbqoz1g/Private/Tests/CommonTestUtils";

describe("SessionStorage", () => {

  let sessionStorageStub: sinon.SinonStub;

  beforeEach(() => sessionStorageStub = stubSessionStorage(new StorageMock()));
  afterEach(() => unstub(sessionStorageStub));

  it("constructor", () => {
    const sessionStorage = new SessionStorage();
    expect(sessionStorage).toBeInstanceOf(BaseSessionStorage);
  });
});