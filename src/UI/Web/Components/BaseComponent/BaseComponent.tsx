import * as React from "react";
import PagesComponent from "UI/Web/Components/PagesComponent";
import SliderComponent from "UI/Web/Components/SliderComponent";
import { observer } from "mobx-react";
// import { l } from "UI/Stores/LocalisationStore";
// import { BaseComponentStore } from "UI/Stores/BaseComponentStore";

export interface IBaseComponentProps {
  /** Optional title */
  readonly title?: string;
}

@observer
export default class BaseComponent extends React.Component<IBaseComponentProps> {

  public constructor(props: IBaseComponentProps) {
    // Removed semicolon because code coverage reports "branch not covered" due to the way how typescript is transpiled to javascript
    super(props) // tslint:disable-line:semicolon
  }

  // private readonly BaseComponentStore: BaseComponentStore = BaseComponentStore.instance;

  public render() {
    const images: string[] = ["https://s3.ap-south-1.amazonaws.com/mt-sm-ww-content/slider/01.JPG", "https://s3.ap-south-1.amazonaws.com/mt-sm-ww-content/slider/02.JPG"];

    return (
      <div className="container-fluid">
        <div className="row _landscape">
          <div className="col-6"><SliderComponent images={images} /></div>
          <div className="col-6 _fold"><PagesComponent /></div>
        </div>
      </div>
    );
  }
}