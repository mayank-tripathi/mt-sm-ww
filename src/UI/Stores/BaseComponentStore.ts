import * as BusinessRules from "../../BusinessLogic/BusinessRules";
import { action, computed, observable, reaction, runInAction } from "mobx";
import { FrameworkError } from "zftsbqoz1g/Public/Common/Errors/Base/FrameworkError";
import { fromIResponse, tryCatchWithValidation } from "zftsbqoz1g/Public/UI/Utils/ViewUtils";
import { IBaseErrorTypes } from "zftsbqoz1g/Public/Common/Errors/Interfaces/IBaseErrorTypes";
import { IErrorParameters } from "Common/Errors/Interfaces/IErrorParameters";
import { ISampleService } from "zftsbqoz1g/Public/BusinessLogic/Interfaces/ISampleService";
import { l } from "./LocalisationStore";
import { NotificationStore } from "zftsbqoz1g/Public/UI/Stores/NotificationStore";
import { SampleRequestModel } from "zftsbqoz1g/Public/BusinessLogic/Models/RequestModels/SampleRequestModel";
import { SampleRequestViewModel } from "zftsbqoz1g/Public/UI/Models/RequestModels/SampleRequestViewModel";
import { SampleResponseViewModel } from "zftsbqoz1g/Public/UI/Models/ResponseModels/SampleResponseViewModel";
import { SampleService } from "zftsbqoz1g/Public/BusinessLogic/Implementations/SampleService";

// tslint:disable:member-ordering
/**
 * Private constructor to prevent instantiation directly
 * Class should be instantiated only through "instance" getter to always return a new instance of BaseComponentStore
 */
export class BaseComponentStore {

  /**
   * Private constructor to prevent instantiation directly
   * Class should be instantiated only through "instance" getter to always return a new instance of BaseComponentStore
   */
  private constructor() { }

  /** Static getter to always return a new instance of BaseComponentStore */
  public static get instance(): BaseComponentStore {
    return runInAction("new BaseComponentStore()", () => new BaseComponentStore());
  }

  private readonly _sampleService: ISampleService = new SampleService();
  private readonly _notification: NotificationStore = NotificationStore.singleton;

  /////////////////////
  // Request Message //
  /////////////////////

  // Observables

  @observable public requestMessage: string = "";
  @observable public requestMessageFrameworkError: FrameworkError<IErrorParameters, IBaseErrorTypes, any, any> | undefined = undefined; // tslint:disable-line:no-any

  @observable public responseMessage: string = "";

  // Computed

  @computed
  public get requestMessageErrorMessage(): string | undefined {
    return this.requestMessageFrameworkError ? l.getErrorMessage(this.requestMessageFrameworkError) : undefined;
  }

  // Actions

  @action
  public readonly setRequestMessage = (requestMessage: string): void => {
    this.requestMessage = requestMessage;
  }

  @action
  public readonly validateRequestMessage = (): void => {
    this.requestMessageFrameworkError = BusinessRules.validateRequestMessage(this.requestMessage);
  }

  @action
  public readonly submitRequestMessage = async (): Promise<void> => {
    this.responseMessage = "";
    const sampleRequestViewModel: SampleRequestViewModel = new SampleRequestViewModel(this.requestMessage);

    const sampleResponse = await tryCatchWithValidation(sampleRequestViewModel, async () => {
      const sampleRequestRequestModel: SampleRequestModel = sampleRequestViewModel.toBusinessLogicItem();
      return fromIResponse(await this._sampleService.getSampleMessage(sampleRequestRequestModel), SampleResponseViewModel.fromBusinessLogicItem);
    });

    // If response is successful then populate the cache
    if (sampleResponse.isSuccessful && sampleResponse.data) {
      this.responseMessage = sampleResponse.data.responseMessage;
    } else {
      this._notification.openFrameworkErrorNotification(l.get("error"), sampleResponse.frameworkError, l);
    }
  }

  // Reactions
  protected readonly requestMessageValidationReaction = reaction(
    () => this.requestMessage,
    () => this.validateRequestMessage(),
    { name: "requestMessageValidationReaction" });
}