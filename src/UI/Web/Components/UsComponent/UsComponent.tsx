import * as React from "react";
import { observer } from "mobx-react";
// import { PageStore } from "UI/Stores/PageStore";

const _topDesign = require("../../Styles/images/top-design.png"); // tslint:disable-line:no-require-imports no-var-requires

@observer
export default class UsComponent extends React.Component<{}> {

  public constructor(props: {}) {
    // Removed semicolon because code coverage reports "branch not covered" due to the way how typescript is transpiled to javascript
    super(props) // tslint:disable-line:semicolon
  }

  // private readonly PageStore: PageStore = PageStore.instance;

  public render() {
    return (
      <div className={`d-flex flex-column _usPage col-12`}>
        <div className="text-center py-3">
          <img className="top-design" src={_topDesign} />
        </div>
        <h1 className="mt-2 text-center">Us<span>:</span> Today <span>&amp;</span> Forever</h1>
      </div>
    );
  }
}