import { BasePersistentStorage } from "zftsbqoz1g/Public/Api/Storage/BasePersistentStorage";
import { PersistentStorage } from "Api/Storage/PersistentStorage";
import { StorageMock, stubLocalStorage, unstub } from "zftsbqoz1g/Private/Tests/CommonTestUtils";

describe("PersistentStorage", () => {

  let localStorageStub: sinon.SinonStub;

  beforeEach(() => localStorageStub = stubLocalStorage(new StorageMock()));
  afterEach(() => unstub(localStorageStub));

  it("constructor", () => {
    const persistentStorage = new PersistentStorage();
    expect(persistentStorage).toBeInstanceOf(BasePersistentStorage);
  });
});