import * as React from "react";
import Button from "zftsbqoz1g/Public/UI/Web/Components/Button";
import Form from "zftsbqoz1g/Public/UI/Web/Components/Form";
import FormGroup from "zftsbqoz1g/Public/UI/Web/Components/FormGroup";
import TextInput from "zftsbqoz1g/Public/UI/Web/Components/TextInput";
import { l } from "UI/Stores/LocalisationStore";
import { observer } from "mobx-react";
import { SampleComponentStore } from "UI/Stores/SampleComponentStore";

export interface ISampleComponentProps {
  /** Optional title */
  readonly title?: string;
}

@observer
export default class SampleComponent extends React.Component<ISampleComponentProps> {

  public constructor(props: ISampleComponentProps) {
    // Removed semicolon because code coverage reports "branch not covered" due to the way how typescript is transpiled to javascript
    super(props) // tslint:disable-line:semicolon
  }

  private readonly sampleComponentStore: SampleComponentStore = SampleComponentStore.instance;

  public render() {

    const { requestMessage, requestMessageErrorMessage, responseMessage } = this.sampleComponentStore;
    const title: string = this.props.title || l.get("title");

    return (
      <div className="container">
        <Form>
          <h1>{title}</h1>
          <FormGroup>
            <TextInput
              labelText={l.get("requestMessageLabel")}
              name="requestMessage"
              value={requestMessage}
              validationError={requestMessageErrorMessage}
              onChange={this.onRequestMessageChange}
            />
          </FormGroup>
          <Button
            name="requestMessageSubmit"
            isSubmit={true}
            onClick={this.onRequestMessageSubmitClick}>
            {l.get("requestMessageSubmitTitle")}
          </Button>
          <FormGroup>
            <span>{responseMessage}</span>
          </FormGroup>
        </Form>
      </div>
    );
  }

  private readonly onRequestMessageChange = async (requestMessage: string): Promise<void> => {
    this.sampleComponentStore.setRequestMessage(requestMessage);
  }

  private readonly onRequestMessageSubmitClick = async (): Promise<void> => {
    await this.sampleComponentStore.submitRequestMessage();
  }
}