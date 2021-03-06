import { action, observable, runInAction } from "mobx";

// tslint:disable:member-ordering

/**
 * Private constructor to prevent instantiation directly
 * Class should be instantiated only through "instance" getter to always return a new instance of PageStore
 */
export class PageStore {

  /**
   * Private constructor to prevent instantiation directly
   * Class should be instantiated only through "instance" getter to always return a new instance of PageStore
   */
  private constructor() { }

  public static get instance(): PageStore {
    return runInAction("new PageStore()", () => new PageStore());
  }

  //  private readonly _sampleService: ISampleService = new SampleService();
  @observable public totalImages: number = 0;

  // Observables

  @observable public currentImage: number = 0;
  @observable public daysLeft: number = 0;
  @observable public hoursLeft: number = 0;
  @observable public minutesLeft: number = 0;
  @observable public secondsLeft: number = 0;

  // Computed

  // Actions

  @action
  public readonly setCountdown = (targetDate: Date): void => {
    const _today: Date = new Date();
    let _diff: number = targetDate.getTime() - _today.getTime();

    this.daysLeft = Math.round(_diff / 86400000);
    _diff = _diff % 86400000;

    this.hoursLeft = Math.round(_diff / 3600000);
    _diff = _diff % 3600000;

    this.minutesLeft = Math.round(_diff / 60000);
    _diff = _diff % 60000;

    this.secondsLeft = Math.round(_diff / 1000);
  }

  @action
  public readonly setCurrentImage = (index: number): void => {
    index = index > this.totalImages ? 0 : index;
    index = index < 0 ? this.totalImages : index;
    this.currentImage = index;
  }

  public readonly setTotalImage = (index: number): void => {
    this.totalImages = index;
  }
}