import * as React from "react";
import { observer } from "mobx-react";
// import { PageStore } from "UI/Stores/PageStore";

export interface IUsComponent {
  /** Optional title */
  readonly isActive: boolean;
}

@observer
export default class UsComponent extends React.Component<IUsComponent> {

  public constructor(props: IUsComponent) {
    // Removed semicolon because code coverage reports "branch not covered" due to the way how typescript is transpiled to javascript
    super(props) // tslint:disable-line:semicolon
  }

  // private readonly PageStore: PageStore = PageStore.instance;

  public render() {
    const _isActive: string = !this.props.isActive ? "d-none" : "";
    return (
      <div className={`d-flex flex-column _usPage ${_isActive}`}>
        Us comes here
      </div>
    );
  }
}