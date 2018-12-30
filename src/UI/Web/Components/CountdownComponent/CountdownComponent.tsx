import * as React from "react";

export interface ICountdownComponent {
  /** Optional title */
  readonly targetDate: Date;
}
export default class CountdownComponent extends React.Component<ICountdownComponent> {

  public constructor(props: ICountdownComponent) {
    // Removed semicolon because code coverage reports "branch not covered" due to the way how typescript is transpiled to javascript
    super(props) // tslint:disable-line:semicolon
  }

  public render() {

    return (
      <div className="_countdown text-center pb-3">
        Countdown to come here
      </div>
    );
  }
}