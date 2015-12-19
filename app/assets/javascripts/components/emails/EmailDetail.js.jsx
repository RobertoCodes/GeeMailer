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
      ApiUtil.markEmailAsRead(this.props.email.id);
    }
  },

  componentWillUnmount: function () {
    this._updateReadState();
  },

  render: function () {

    var emailReceiver;
    if (this.props.email.email_type === "received") {
      emailReceiver = <p className="email-recipient">to me</p>;
    } else {
      emailReceiver = <p className="email-recipient">to {this.props.email.recipient_email}</p>;
    }
    var emailBodyView = "";
    if (this.props.email.html_body) {
      emailBodyView = <p dangerouslySetInnerHTML={{__html: this.props.email.html_body}} />;
    } else {
      emailBodyView = <p> {this.props.email.body} </p>;
    }
      return (
        <div className="email-details">
          <h4>{emailReceiver}</h4>
          <br/>
          <br/>
          {emailBodyView}
          <br/>
        </div>
      );
  }
});
