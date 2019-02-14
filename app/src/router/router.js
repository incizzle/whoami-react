import React from "react";
import { Route } from "react-router-dom";
import whoami from "../components/whoami";
import reverselookup from "../components/reverselookup";
import Header from "../header";

class ReactRouter extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Route exact path="/" component={whoami} />
        <Route  path="/reverselookup" component={reverselookup} />
      </React.Fragment>
    );
  }
}

export default ReactRouter;
