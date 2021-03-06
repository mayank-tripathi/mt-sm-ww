import * as React from "react";
import CountdownComponent from "../CountdownComponent";
import { observer } from "mobx-react";
// import { PageStore } from "UI/Stores/PageStore";

const _midDesign = require("../../Styles/images/design-mid.png"); // tslint:disable-line:no-require-imports no-var-requires
const _topDesign = require("../../Styles/images/top-design.png"); // tslint:disable-line:no-require-imports no-var-requires

@observer
export default class LandingPageComponent extends React.Component<{}> {

  public constructor(props: {}) {
    // Removed semicolon because code coverage reports "branch not covered" due to the way how typescript is transpiled to javascript
    super(props) // tslint:disable-line:semicolon
  }

  // private readonly PageStore: PageStore = PageStore.instance;

  public render() {
    return (
      <div className={`d-flex flex-column _landingPage`}>
        <div className="text-center py-3">
          <img className="top-design" src={_topDesign} />
        </div>
        <p className="text-center mb-0">As we shall become one<br />to share all the days of our lives...</p>
        <div className="col-12 _nameContainer">
          <div className="text-center _inverted pt-3">
            <img className="mid-design" src={_midDesign} />
          </div>
          <h1 className="text-center py-3 mb-0">Mayank<br /><span>&amp;</span><br />Shatakshi</h1>
          <div className="text-center pb-3">
            <img className="mid-design" src={_midDesign} />
          </div>
        </div>
        <CountdownComponent targetDate={new Date("01/27/2019 19:00:00")} />
      </div>
    );
  }
}