import React from "react";
import AppPresenter from "./AppPresenter";

class AppContainer extends React.Component {
  constructor(props: any) {
    super(props);
  }

  public render() {
    return <AppPresenter />;
  }
}

export default AppContainer;
