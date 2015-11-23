window.ContactForm = React.createClass({
  mixins: [ReactRouter.History],

  getInitialState: function () {
    return ({ name: "", subject: "", body: "" });
  },

  handleNameChange: function (e) {
    this.setState({name: e.currentTarget.value});
  },

  handleEmailChange: function (e) {
    this.setState({email: e.currentTarget.value});
  },

  handlePhoneNumChange: function (e) {
    this.setState({phoneNum: e.currentTarget.value});
  },

  createContact: function (e) {
    e.preventDefault();
    var contact = {};
    Object.keys(this.state).forEach(function (key) {
      contact[key] = this.state[key];
    }.bind(this));
    ApiUtil.createContact(contact, function () {
      this.history.pushState(null, "/", {});
    }.bind(this));
    this.setState({ name: "", email: "", phoneNum: "" });
  },

  closeForm: function (e) {
    debugger;
    e.preventDefault();
    this.history.goBack();
  },




  render: function () {
    return (
      <div className="contact-form">
      <label>New Message</label>
      <br/>
        <form onSubmit={this.createContact}>
            <input className="contact-form-name-input" type="text" value={this.state.name}
              onChange={this.handleNameChange} placeholder="Name"/>
          <br/>
            <input className="contact-form-email-input" type="email" value={this.state.email}
              onChange={this.handleEmailChange} placeholder="E-mail"/>
          <br/>
            <input type="text" className="contact-form-phonenum-input"
              value={this.state.phoneNum} onChange={this.handlePhoneNumChange}/>
          <br/>
            <button>Save</button>

        </form>
      </div>
    );


  }





});
