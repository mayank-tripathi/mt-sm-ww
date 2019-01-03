import * as React from "react";
import LandingPageWrapper from "../LandingPageWrapper";
import { l as baseLocalisation } from "zftsbqoz1g/Public/UI/Stores/LocalisationStore";
import { l } from "UI/Stores/LocalisationStore";
import { observer } from "mobx-react";
import { Route, Switch } from "react-router-dom";

/** Routes component to define all navigation routes for the application */
@observer
export default class Routes extends React.Component {

  public async componentDidMount() {
    await baseLocalisation.getMessagesForLocale("");
    await l.getMessagesForLocale("");
  }

  public render() {
    return <>
      <Switch>
        <Route path="/" component={LandingPageWrapper} />
      </Switch>
    </>;
  }
}