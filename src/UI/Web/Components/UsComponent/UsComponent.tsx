import * as React from "react";
import { observer } from "mobx-react";
// import { PageStore } from "UI/Stores/PageStore";

@observer
export default class UsComponent extends React.Component<{}> {

  public constructor(props: {}) {
    // Removed semicolon because code coverage reports "branch not covered" due to the way how typescript is transpiled to javascript
    super(props) // tslint:disable-line:semicolon
  }

  // private readonly PageStore: PageStore = PageStore.instance;

  public render() {
    return (
      <div className={`d-flex flex-column _usPage`}>
        Us comes here
      </div>
    );
  }
}