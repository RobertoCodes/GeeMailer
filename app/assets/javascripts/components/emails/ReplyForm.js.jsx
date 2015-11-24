window.ReplyForm = React.createClass({
  mixins: [ReactRouter.History],

  getInitialState: function () {
    return ({ recipient_email: this.props.previousEmail.sender_email, subject: "Re: " + this.props.previousEmail.subject,
              body: "", parent_email_id: this.props.previousEmail.id });
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

  createEmail: function (e) {
    e.preventDefault();
    var email = {};
    Object.keys(this.state).forEach(function (key) {
      email[key] = this.state[key];
    }.bind(this));
    ApiUtil.createEmail(email);
    this.setState({ recipient_email: "", body: "" });
  },

  clickForm: function (e) {
    e.preventDefault();
  },

  unselectForm: function (e) {


  },

  render: function () {
    return (
      <div className="email-reply-form">
        <form onSubmit={this.createEmail}>
            <input className="email-form-to-input" type="email" value={this.state.recipient_email}
              onChange={this.handleToChange}/>
          <br/>
            <input type="textarea" className="email-form-body-input"
              value={this.state.body} onChange={this.handleBodyChange}/>
          <br/>
            <button>Send</button>

        </form>
      </div>
    );


  }

});
