window.EmailForm = React.createClass({


  getInitialState: function () {
    return ({ recipient_email: "", subject: "", body: "" });
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
    this.setState({ recipient_email: "", subject: "", body: "" });
  },




  render: function () {
    return (
      <div className="email-form">
      <label>New Message</label>
        <form onSubmit={this.createEmail}>
          <label>To</label>
            <input className="email-form-to-input" type="email" value={this.state.recipient_email}
              onChange={this.handleToChange}/>

          <label>Subject</label>
            <input className="email-form-subject-input" type="text" value={this.state.subject}
              onChange={this.handleSubjectChange} placeholder="Subject"/>

            <input type="textarea" className="email-form-body-input"
              value={this.state.body} onChange={this.handleBodyChange}/>

            <button className="email-form-send-button"></button>

        </form>
      </div>
    );


  }





});
