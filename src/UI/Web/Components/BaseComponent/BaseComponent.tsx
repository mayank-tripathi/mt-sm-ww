import * as React from "react";
import MenuComponent from "../MenuComponent";
import RotatingIcon from "../RotatingIcon";
import SliderComponent from "../SliderComponent";
import { observer } from "mobx-react";

interface IBaseComponent {
  readonly images: string[];
}

@observer
export default class BaseComponent extends React.Component<IBaseComponent> {

  public constructor(props: IBaseComponent) {
    // Removed semicolon because code coverage reports "branch not covered" due to the way how typescript is transpiled to javascript
    super(props) // tslint:disable-line:semicolon
  }

  public render() {
    return (
      <div className="container-fluid">
        <div className="row _landscape">
          <MenuComponent />
          <div className="col-6"><SliderComponent images={this.props.images} /></div>
          <div className="col-6 _fold">
            <div className="_pageBg _pagesContainer">
              {this.props.children}
            </div>
          </div>
        </div>
        <div className="row _portrait">
          <RotatingIcon />
          <MenuComponent />
          <div className="col-12"><SliderComponent images={this.props.images} /></div>
          <div className="col-12 _fold">
            <div className="_pageBg _pagesContainer">
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
    );
  }
}