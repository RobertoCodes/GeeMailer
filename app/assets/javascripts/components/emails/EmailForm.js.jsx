window.EmailForm = React.createClass({
  mixins: [ReactRouter.History],

  getInitialState: function () {
    var recipient_email = "";
    if (this.props.location.state !== null) {
      recipient_email = this.props.location.state.contact_email;
    }
    return ({ recipient_email: recipient_email, subject: "", body: "" });
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
    this.history.goBack();
    var email = {};
    Object.keys(this.state).forEach(function (key) {
      email[key] = this.state[key];
    }.bind(this));
    this.setState({ recipient_email: "", subject: "", body: "" });
    ApiUtil.createEmail(email)
  },

  closeForm: function (e) {
    e.preventDefault();
    this.history.goBack();
  },

  render: function () {
    return (
      <div className="email-form">
      <label className="new-message-label"><span>New Message</span>
        <button onClick={this.closeForm}>X</button>
      </label>
        <form onSubmit={this.createEmail}>
            <input className="email-form-to-input" type="email" value={this.state.recipient_email}
              onChange={this.handleToChange} placeholder="Recipient"/>
          <br/>
            <input className="email-form-subject-input" type="text" value={this.state.subject}
              onChange={this.handleSubjectChange} placeholder="Subject"/>
          <br/>
            <textarea rows="20" cols="5" value={this.state.body} onChange={this.handleBodyChange}>
            </textarea>
            <div className="send_email"><button>Send</button></div>

        </form>
      </div>
    );


  }





});
