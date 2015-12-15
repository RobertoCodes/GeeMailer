window.Notification = React.createClass({

getInitialState: function () {
  return {notification: ""};
},

_onChange: function () {
  this.setState({notification: NotificationStore.notification()});
  setTimeout(function () {
    this.setState({notification: ""})
  }.bind(this), 4000);
},

componentDidMount: function () {
    NotificationStore.addChangeHandler(this._onChange);
    this.setState({notification: NotificationStore.notification()});
},

componentWillUnmount: function () {
  NotificationStore.removeChangeHandler(this._onChange);
},

render: function () {
  if (this.state.notification) {
    if (this.state.notification !== "") {
      return (
        <div id="notification">
          {this.state.notification}
        </div>
      );
    } else {
      return (<div></div>);
    }
  } else {
    return ( <div></div>);
  }
}

});
