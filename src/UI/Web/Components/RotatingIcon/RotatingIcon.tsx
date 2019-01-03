import * as React from "react";
import { observer } from "mobx-react";

const _rotateIcon = require("../../Styles/images/rotate-screen-icon.gif"); // tslint:disable-line:no-require-imports no-var-requires

@observer
export default class RotatingIcon extends React.Component<{}> {

  public constructor(props: {}) {
    // Removed semicolon because code coverage reports "branch not covered" due to the way how typescript is transpiled to javascript
    super(props) // tslint:disable-line:semicolon
  }

  public render() {
    return (
      <div className="_rotateIcon text-center">
        <img src={_rotateIcon} />
      </div>
    );
  }
}