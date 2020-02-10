import React, { PureComponent } from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "./pages/homepage/homepage.component";
import disqualified from "./pages/disqualification/disqualifcation.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";

import { AppContainer } from "App.styles";

class App extends PureComponent {
  render() {
    return (
      <AppContainer>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route
            exact
            path='/SignInAndSignUpPage'
            component={SignInAndSignUpPage}
          />
          <Route exact path='/disqualified' component={disqualified} />
        </Switch>
      </AppContainer>
    );
  }
}

export default App;
