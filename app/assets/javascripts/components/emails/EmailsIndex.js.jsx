window.EmailsIndex = React.createClass({
  getInitialState: function () {
    return { emails: EmailStore.all()};
  },

  _onChange: function () {
    this.setState({ emails: EmailStore.all()});
  },

  componentDidMount: function () {
    var category = "/inbox";
    EmailStore.addEmailsIndexChangeListener(this._onChange);
    EmailStore.addEmailDetailChangeListener(this._onChange);
    ApiUtil.fetchAllEmails(category);
  },

  componentWillReceiveProps: function (newCategory) {
    ApiUtil.fetchAllEmails(newCategory);

  },

  componentWillUnmount: function () {
    EmailStore.removeEmailsIndexChangeListener(this._onChange);
    EmailStore.removeEmailDetailChangeListener(this._onChange);
  },

  render: function () {
    return(
      <div className="emails-index">
      <ul>
        {this.state.emails.map(function (email) {
          return <div className="inbox-row"> <EmailsIndexItem key={email.id} email={email}/></div>;
        })}
      </ul>
      </div>
    );
  }







});
