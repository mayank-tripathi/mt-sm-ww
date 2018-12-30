import * as React from "react";
import LandingPageComponent from "../LandingPageComponent";
import { observer } from "mobx-react";
import { PageStore } from "UI/Stores/PageStore";

@observer
export default class PagesComponent extends React.Component<{}> {

  public constructor(props: {}) {
    // Removed semicolon because code coverage reports "branch not covered" due to the way how typescript is transpiled to javascript
    super(props) // tslint:disable-line:semicolon
  }

  private readonly PageStore: PageStore = PageStore.instance;

  public render() {

    return (
      <div className="px-0 d-flex flex-column justify-content-center justify-content-sm-start _pageBg _pagesContainer">
        <LandingPageComponent isActive={this.PageStore.currentPage === 0} />
      </div>
    );
  }
}