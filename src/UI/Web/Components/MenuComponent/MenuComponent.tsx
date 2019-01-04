import * as React from "react";
import { Link } from "react-router-dom";
import { observer } from "mobx-react";
// import { PageStore } from "UI/Stores/PageStore";

@observer
export default class MenuComponent extends React.Component<{}> {

  public constructor(props: {}) {
    // Removed semicolon because code coverage reports "branch not covered" due to the way how typescript is transpiled to javascript
    super(props) // tslint:disable-line:semicolon
  }

  // private readonly PageStore: PageStore = PageStore.instance;

  public render() {
    return (
      <div className={`col-12 d-flex _menu`}>
        <div className="text-center">
          <Link to="/"><i className="fas fa-heart" /></Link>
        </div>
        <div className="text-center">
          <Link to="/us"><i className="fas fa-hand-holding-heart" /></Link>
        </div>
      </div>
    );
  }
}