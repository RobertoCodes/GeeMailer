window.EmailDetail = React.createClass({

  mixins: [ReactRouter.History],
  //
  // getStateFromStore: function () {
  //   return { email: EmailStore.find(parseInt(this.props.params.emailId)) };
  // },

  // _onChange: function () {
  //   // ApiUtil.fetchSingleEmail(this.props.params.emailId);
  //   this.setState(this.getStateFromStore());
  // },

  _updateReadState: function () {
    if (!this.props.email.read) {
      ApiUtil.markAsRead(this.props.email.id);
    }
  },

  // getInitialState: function () {
  //   return this.getStateFromStore();
  // },

  // componentWillReceiveProps: function (newProps) {
  //   ApiUtil.fetchSingleEmail(parseInt(newProps.params.emailId));
  // },

  componentDidMount: function () {
    this._updateReadState();
    // ApiUtil.fetchSingleEmail(parseInt(this.props.params.emailId));
  },

  // componentWillUnmount: function () {
  //   EmailStore.removeEmailDetailChangeListener(this._onChange);
  // },


  // deleteConversation: function (e) {
  //   e.preventDefault();
  //   ApiUtil.deleteConversation(this.state.email.id, function () {
  //     this.history.pushState(null, "/", {});
  //   }.bind(this));
  // },

  render: function () {
    // if (this.props.email) {
    //   var parsedChildren = [];
    //     if (this.props.email.children) {
    //       this.props.email.children.forEach(function (child) {
    //         parsedChildren.push(child);
    //       });
    //     }
      return (
        <div className="email-details">
          <h4>From: {this.props.email.sender_email}</h4>
          <h4>To: {this.props.email.recipient_email}</h4>
          <br/>
          <br/>
          <h3>{this.props.email.subject} </h3>
          <br/>
          <br/>
          <h4> {this.props.email.body} </h4>
        </div>
      );
  }
});
          // <ReplyForm previousEmail={this.props.email}/> <<-- only show if they click reply.
