window.ReplyForm = React.createClass({
  mixins: [ReactRouter.History],

  getInitialState: function () {
    var recipient_email;
    if (this.props.previousEmail.email_type === "received") {
      recipient_email = this.props.previousEmail.sender_email;
    } else {
      recipient_email = this.props.previousEmail.recipient_email;
    }

    return ({ recipient_email: recipient_email, subject: "Re: " + this.props.previousEmail.subject,
              body: "", parent_email_id: this.props.previousEmail.id, expanded: false});
  },

  handleToChange: function (e) {
    this.setState({recipient_email: e.currentTarget.value});
  },

  handleSubjectChange: function (e) {
    this.setState({subject: e.currentTarget.value});
  },

  handleBodyChange: function (e) {
    this.setState({body: e.currentTarget.value});
  },


  createReply: function (e) {
    e.preventDefault();
    var email = {};
    Object.keys(this.state).forEach(function (key) {
      email[key] = this.state[key];
    }.bind(this));
    ApiUtil.createEmail(email);
    this.setState({ recipient_email: "", body: "" , expanded: false});
  },

  clickForm: function (e) {
    e.preventDefault();
    this.setState({expanded: true});
  },

  render: function () {
    var viewForm;
    if (this.state.expanded) {
      viewForm =
      <div className="email-reply-form">
        <form onSubmit={this.createReply}>
          <input className="email-reply-form-to" type="email"
            value={this.state.recipient_email} onChange={this.handleToChange}/>
          <br/>
          <textarea rows="20" cols="5" value={this.state.body}
            onChange={this.handleBodyChange}>
          </textarea>
          <br/>
          <div className="send_reply"><button>Send</button></div>

        </form>
      </div>;

    } else {
      viewForm = <div className="email-reply-placeholder">
                  <textarea onClick={this.clickForm} rows="20" cols="5" value={this.state.body}
                    placeHolder="Click Here to Reply">
                  </textarea>
                </div>;
      }
      return ( <div>
                {viewForm}
              </div>
              )
  }

});
