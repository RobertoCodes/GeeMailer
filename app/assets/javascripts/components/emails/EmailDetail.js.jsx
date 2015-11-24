window.EmailDetail = React.createClass({

  mixins: [ReactRouter.History],

  getStateFromStore: function () {
    return { email: EmailStore.find(parseInt(this.props.params.emailId)) };
  },

  _onChange: function () {
    ApiUtil.fetchSingleEmail(this.props.params.emailId);
    this.setState(this.getStateFromStore());
  },

  _updateReadState: function () {
    if (!this.state.email.read) {
      ApiUtil.markAsRead(this.state.email.id);
    }
  },

  getInitialState: function () {
    return this.getStateFromStore();
  },

  componentWillReceiveProps: function (newProps) {
    ApiUtil.fetchSingleEmail(parseInt(newProps.params.emailId));
  },

  componentDidMount: function () {
    this._updateReadState();
    EmailStore.addEmailDetailChangeListener(this._onChange);
    ApiUtil.fetchSingleEmail(parseInt(this.props.params.emailId));
  },

  componentWillUnmount: function () {
    EmailStore.removeEmailDetailChangeListener(this._onChange);
  },

  deleteConversation: function (e) {
    e.preventDefault();
    ApiUtil.deleteConversation(this.state.email.id, function () {
      this.history.pushState(null, "/", {});
    }.bind(this));
  },

  render: function () {
    debugger;
    if (this.state.email) {
      var parsedChildren = [];
        if (this.state.email.children) {
          this.state.email.children.forEach(function (child) {
            parsedChildren.push(child);
          });
        }
      return (
        <div className="emails-index">
          <button onClick={this.deleteConversation}>Delete Conversation</button>
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
          <ReplyForm previousEmail={this.state.email}/>
        </div>
      );
    } else {
      return (<div></div>);
    }
  }




});
