import * as React from "react";
import { observer } from "mobx-react";
// import { l } from "UI/Stores/LocalisationStore";
// import { SliderComponentStore } from "UI/Stores/SliderComponentStore";

export interface ISliderComponentProps {
  /** Optional title */
  readonly images: string[];
}

@observer
export default class SliderComponent extends React.Component<ISliderComponentProps> {

  public constructor(props: ISliderComponentProps) {
    // Removed semicolon because code coverage reports "branch not covered" due to the way how typescript is transpiled to javascript
    super(props) // tslint:disable-line:semicolon
  }

  // private readonly SliderComponentStore: SliderComponentStore = SliderComponentStore.instance;

  public render() {

    return (
      <div className="col _pageBg _sliderContainer">
        {this.props.images && this.getImages()}
      </div>
    );
  }

  private readonly getImages = (): JSX.Element[] => this.props.images.map((image: string, index: number) => {
    const style: React.CSSProperties | undefined = {};
    style.backgroundImage = image;
    return <div className="_sliderImage" key={index} style={style} />;
  })
}