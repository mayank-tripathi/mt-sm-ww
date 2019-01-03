import * as React from "react";
import PagesComponent from "UI/Web/Components/PagesComponent";
import RotatingIcon from "../RotatingIcon";
import SliderComponent from "UI/Web/Components/SliderComponent";
import { observer } from "mobx-react";

@observer
export default class LandingPageWrapper extends React.Component<{}> {

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
      <div className="container-fluid">
        <div className="row _landscape">
          <div className="col-6"><SliderComponent images={this.images} /></div>
          <div className="col-6 _fold"><PagesComponent /></div>
        </div>
        <div className="row _portrait">
          <RotatingIcon />
          <div className="col-12"><SliderComponent images={this.images} /></div>
          <div className="col-12 _fold"><PagesComponent /></div>
        </div>
      </div>
    );
  }
}