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
      <div className="col _pageBg _sliderContainer p-0">
        <div className="col p-0 _sliderImages">
          {this.props.images && this.getImages()}
        </div>
        <div className="col p-0 _sliderNavigatorContainer text-center">
          {this.props.images && this.getSliderNavigators(this.props.images.length)}
        </div>
      </div>
    );
  }

  private readonly getImages = (): JSX.Element[] => this.props.images.map((image: string, index: number) => {
    const style: React.CSSProperties | undefined = {};
    style.backgroundImage = `url(${image})`;
    return <div className="col-12 _sliderImage" data-index={index} key={index} style={style} />;
  })

  private readonly getSliderNavigators = (imagesCount: number): JSX.Element[] => {
    const _toReturn: JSX.Element[] = [];

    for (let i = 0; i < imagesCount; i++) {
      _toReturn.push(<a className="_sliderNavigator d-inline-flex" data-index={i} href="" key={i}>{i}</a>);
    }

    return _toReturn;
  }
}