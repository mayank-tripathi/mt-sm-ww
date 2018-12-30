import * as React from "react";
import { observer } from "mobx-react";
import { PageStore } from "UI/Stores/PageStore";
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

  private readonly PageStore: PageStore = PageStore.instance;

  // tslint:disable-next-line:no-empty
  private _sliderInterval: number = -1;

  public componentDidMount() {
    this.startSlider();
  }
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
    const _visibility: string = this.PageStore.currentImage === index ? "visible" : "";
    return <div className={`col-12 _sliderImage ${_visibility}`} key={index} style={style} />;
  })

  private readonly getSliderNavigators = (imagesCount: number): JSX.Element[] => {
    const _toReturn: JSX.Element[] = [];

    for (let i = 0; i < imagesCount; i++) {
      const _active: string = this.PageStore.currentImage === i ? "active" : "";
      _toReturn.push(<a className={`_sliderNavigator d-inline-flex ${_active}`} data-index={i} href="" key={i} />);
    }

    return _toReturn;
  }
  private readonly changeImage = (index: number): void => {
    this.PageStore.setCurrentImage(index);
  }

  private readonly startSlider = (): void => {
    if (this._sliderInterval) {
      clearInterval(this._sliderInterval);
    }

    this._sliderInterval = window.setInterval(() => {
      this.changeImage(this.PageStore.currentImage + 1);
    }, 5000);
  }
}