import * as React from "react";
import LandingPageWrapper from "../LandingPageWrapper";
import UsPageWrapper from "../UsPageWrapper";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { l as baseLocalisation } from "zftsbqoz1g/Public/UI/Stores/LocalisationStore";
import { l } from "UI/Stores/LocalisationStore";
import { observer } from "mobx-react";

/** Routes component to define all navigation routes for the application */
@observer
export default class Routes extends React.Component {

  public async componentDidMount() {
    await baseLocalisation.getMessagesForLocale("");
    await l.getMessagesForLocale("");
  }

  public render() {
    return <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact={true} component={LandingPageWrapper} />
          <Route path="/us" exact={true} component={UsPageWrapper} />
        </Switch>
      </BrowserRouter>
    </>;
  }
}