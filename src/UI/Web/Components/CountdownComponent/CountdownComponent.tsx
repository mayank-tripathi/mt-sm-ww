import * as React from "react";
import { observer } from "mobx-react";
import { PageStore } from "UI/Stores/PageStore";

export interface ICountdownComponent {
  /** Optional title */
  readonly targetDate: Date;
}
@observer
export default class CountdownComponent extends React.Component<ICountdownComponent> {

  public constructor(props: ICountdownComponent) {
    // Removed semicolon because code coverage reports "branch not covered" due to the way how typescript is transpiled to javascript
    super(props) // tslint:disable-line:semicolon
  }

  private readonly PageStore: PageStore = PageStore.instance;
  private _countdownInterval: number = 0;

  public componentDidMount() {
    this.startCountdown();
  }

  public render() {

    return (
      <div className="_countdown text-center pb-3">
        <p>
          <span className="d-inline-block">
            <span className="_clockDigit">{this.PageStore.daysLeft}</span>
            <span className="pl-1 _title">Days</span>
          </span>
          <span className="d-inline-block ml-3">
            <span className="_clockDigit">{this.PageStore.hoursLeft}</span>
            <span className="pl-1 _title">Hours</span>
          </span>
          <span className="d-inline-block ml-3">
            <span className="_clockDigit">{this.PageStore.minutesLeft}</span>
            <span className="pl-1 _title">Minutes</span>
          </span>
          <span className="d-inline-block ml-3">
            <span className="_clockDigit">{this.PageStore.secondsLeft}</span>
            <span className="pl-1 _title">Seconds</span>
          </span>
        </p>
        <p className="text-center">&hearts; to the ceremony that will bring us together forever &hearts;</p>
      </div>
    );
  }

  private readonly startCountdown = (): void => {
    if (this._countdownInterval) {
      clearInterval(this._countdownInterval);
    }

    this.PageStore.setCountdown(this.props.targetDate);

    this._countdownInterval = window.setInterval(() => {
      this.PageStore.setCountdown(this.props.targetDate);
    }, 1000);
  }
}