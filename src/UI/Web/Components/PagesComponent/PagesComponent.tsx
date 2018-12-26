import * as React from "react";
import { observer } from "mobx-react";
// import { l } from "UI/Stores/LocalisationStore";
// import { PagesComponentStore } from "UI/Stores/PagesComponentStore";

export interface IPagesComponentProps {
  /** Optional title */
  readonly activePage?: number;
}

@observer
export default class PagesComponent extends React.Component<IPagesComponentProps> {

  public constructor(props: IPagesComponentProps) {
    // Removed semicolon because code coverage reports "branch not covered" due to the way how typescript is transpiled to javascript
    super(props) // tslint:disable-line:semicolon
  }

  // private readonly PagesComponentStore: PagesComponentStore = PagesComponentStore.instance;

  public render() {

    return (
      <div className="col _pageBg _pagesContainer">
        Pages go here
      </div>
    );
  }
}