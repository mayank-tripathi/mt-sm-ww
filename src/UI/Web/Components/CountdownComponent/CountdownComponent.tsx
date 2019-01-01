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
    const _days: string = this.PageStore.daysLeft < 10 ? `0${this.PageStore.daysLeft}` : `${this.PageStore.daysLeft}`;
    const _hours: string = this.PageStore.hoursLeft < 10 ? `0${this.PageStore.hoursLeft}` : `${this.PageStore.hoursLeft}`;
    const _minutes: string = this.PageStore.minutesLeft < 10 ? `0${this.PageStore.minutesLeft}` : `${this.PageStore.minutesLeft}`;
    const _seconds: string = this.PageStore.secondsLeft < 10 ? `0${this.PageStore.secondsLeft}` : `${this.PageStore.secondsLeft}`;
    return (
      <div className="_countdown text-center px-2 pb-3">
        <p>
          <span className="d-inline-block">
            <span className="_clockDigit">{_days}</span>
            <span className="pl-1 _title">Days</span>
          </span>
          <span className="d-inline-block ml-3">
            <span className="_clockDigit">{_hours}</span>
            <span className="pl-1 _title">Hours</span>
          </span>
          <span className="d-inline-block ml-3">
            <span className="_clockDigit">{_minutes}</span>
            <span className="pl-1 _title">Minutes</span>
          </span>
          <span className="d-inline-block ml-3">
            <span className="_clockDigit">{_seconds}</span>
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