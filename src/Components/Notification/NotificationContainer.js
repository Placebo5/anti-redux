import React, { Component } from "react";
import NotificationPresenter from "./NotificationPresenter";

class NotificationContainer extends Component {
  static propTypes = {};
  state = {};
  render() {
    console.log(this.props);
    return <NotificationPresenter {...this.props} {...this.state} />;
  }
}

export default NotificationContainer;
