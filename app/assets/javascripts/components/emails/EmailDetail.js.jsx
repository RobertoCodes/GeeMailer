window.EmailDetail = React.createClass({

  getStateFromStore: function () {
    return { email: EmailStore.find(parseInt(this.props.params.emailId)) };
  },

  _onChange: function () {
    this.setState(this.getStateFromStore());
  },

  getInitialState: function () {
    return this.getStateFromStore();
  },

  componentWillReceiveProps: function (newProps) {
    ApiUtil.fetchSingleEmail(parseInt(newProps.params.emailId));
  },

  componentDidMount: function () {
    EmailStore.addEmailDetailChangeListener(this._onChange);
    ApiUtil.fetchSingleEmail(parseInt(this.props.params.emailId));
  },

  componentWillUnmount: function () {
    EmailStore.removeEmailDetailChangeListener(this._onChange);
  },

  render: function () {
    if (this.state.email) {
      var parsedChildren = [];
        if (this.state.email.children) {
          this.state.email.children.forEach(function (child) {
            parsedChildren.push(child);
          });
        }
      return (
        <div className="emails-index">
          <h4>From: {this.state.email.sender_email}</h4>
          <h4>To: {this.state.email.recipient_email}</h4>
          <br/>
          <br/>
          <h3>{this.state.email.subject} </h3>
          <br/>
          <br/>
          <h4> {this.state.email.body} </h4>
          <ul>
              {parsedChildren.map(function (child) {
                return <div className="inbox-row"> <EmailsIndexItem key={child.id} email={child}/></div>;
              })}
          </ul>
        </div>
      );
    } else {
      return (<div></div>);
    }
  }




});
