window.EmailsIndex = React.createClass({
  getInitialState: function () {
    return { emails: EmailStore.all()};
  },

  _onChange: function () {
    this.setState({ emails: EmailStore.all()});
  },

  componentDidMount: function () {
    EmailStore.addEmailsIndexChangeListener(this._onChange);
    EmailStore.addEmailDetailChangeListener(this._onChange);
    ApiUtil.fetchAllEmails();
  },

  componentWillUnmount: function () {
    EmailStore.removeEmailsIndexChangeListener(this._onChange);
    EmailStore.removeEmailDetailChangeListener(this._onChange);
  },

  render: function () {
    return(
      <div>
      <ul>
        {this.state.emails.map(function (email) {
          return <EmailsIndexItem key={email.id} email={email}/>;
        })}
      </ul>
      </div>
    );
  }







});
