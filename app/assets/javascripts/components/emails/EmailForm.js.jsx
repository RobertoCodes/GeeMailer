window.EmailForm = React.createClass({

  getInitialState: function () {
    return ({ to: "", subject: "", body: "" });
  },

  handleToChange: function (e) {
    this.setState({to: e.currentTarget.value()});
  },

  handleSubjectChange: function (e) {
    this.setState({subject: e.currentTarget.value()});
  },

  handleBodyChange: function (e) {
    this.setState({body: e.currentTarget.value()});
  },

  handleSubmit: function () {
    e.preventDefault();
  }




  render: function () {
    return (
      <div>
      <label>New Message</label>
        <form>
          <label>To</label>
            <input className="email-form-to-input" type="email" value={this.state.to} onChange={this.handleToChange}/>
          <label>Subject</label>
            <input className="email-form-subject-input" type="text" value={this.state.subject}
              onChange={this.handleSubjectChange} placeholder="Subject"/>
            <input type="textarea" className="email-form-body-input" value={this.state.body} onChange={this.handleBodyChange}/>
            <button className="email-form-send-button" onChange={this.handleSubmit}/>
        </form>
      </div>
    );


  }





});
