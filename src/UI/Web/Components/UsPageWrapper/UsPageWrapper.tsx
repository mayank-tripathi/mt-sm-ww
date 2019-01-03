import * as React from "react";
import BaseComponent from "../BaseComponent";
import UsComponent from "../UsComponent";
import { observer } from "mobx-react";

@observer
export default class UsPageWrapper extends React.Component<{}> {

  public constructor(props: {}) {
    // Removed semicolon because code coverage reports "branch not covered" due to the way how typescript is transpiled to javascript
    super(props) // tslint:disable-line:semicolon
  }
  private readonly images: string[] = [
    "https://s3.ap-south-1.amazonaws.com/mt-sm-ww-content/slider/01.jpg",
    "https://s3.ap-south-1.amazonaws.com/mt-sm-ww-content/slider/02.JPG",
    "https://s3.ap-south-1.amazonaws.com/mt-sm-ww-content/slider/03.JPG",
    "https://s3.ap-south-1.amazonaws.com/mt-sm-ww-content/slider/04.JPG",
    "https://s3.ap-south-1.amazonaws.com/mt-sm-ww-content/slider/05.JPG",
    "https://s3.ap-south-1.amazonaws.com/mt-sm-ww-content/slider/06.JPG",
    "https://s3.ap-south-1.amazonaws.com/mt-sm-ww-content/slider/07.JPG",
    "https://s3.ap-south-1.amazonaws.com/mt-sm-ww-content/slider/08.JPG"
  ];

  public render() {

    return (
      <BaseComponent images={this.images}>
        <UsComponent />
      </BaseComponent>
    );
  }
}