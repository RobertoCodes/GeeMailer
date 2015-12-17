window.EmailForm = React.createClass({
  mixins: [ReactRouter.History],

  getInitialState: function () {
    var recipient_email = "";
    return ({ recipient_email: recipient_email, subject: "", body: "", label: "New Message", reveal: false});
  },

  componentWillReceiveProps: function (newProps) {
    if (newProps.contact !== undefined && newProps.contact !== null) {
      this.setState({ recipient_email: newProps.contact.contact_email_address, reveal: true});
    }
    if (newProps.reveal) {
      if (this.state.reveal === false) {
        this.setState ({reveal: newProps.reveal});
      }
    }
  },

  updateLabel: function () {
    var subject = this.state.subject;
    if (subject !== "") {
      this.setState({label: subject});
    } else {
      this.setState({label: "New Message"});
    }
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
    this.setState({reveal: false});
    var email = {};
    Object.keys(this.state).forEach(function (key) {
      email[key] = this.state[key];
    }.bind(this));
    this.setState({ recipient_email: "", subject: "", body: "", label: "New Message" });
    ApiUtil.createEmail(email);
  },

  closeForm: function (e) {
    e.preventDefault();
    this.setState({ recipient_email: "", subject: "", body: "", label: "New Message", reveal: false });
  },

  render: function () {
    if (this.state.reveal === true) {
      return (
        <div className="email-form">
        <label className="new-message-label"><span>{this.state.label}</span>
          <button onClick={this.closeForm}>X</button>
        </label>
          <form onSubmit={this.createEmail}>
              <input className="email-form-to-input" type="email" value={this.state.recipient_email}
                onChange={this.handleToChange} placeholder="Recipient"/>
            <br/>
              <input className="email-form-subject-input" type="text" value={this.state.subject}
                onChange={this.handleSubjectChange} placeholder="Subject"/>
            <br/>
              <textarea onClick={this.updateLabel} onFocus={this.updateLabel} rows="20" cols="5" value={this.state.body}
                 onChange={this.handleBodyChange}>
              </textarea>
              <div className="send_email"><button>Send</button></div>

          </form>
        </div>
      );
      } else {
        return <div></div>;
      }

  }

});
