window.EmailsIndex = React.createClass({
  getInitialState: function () {
    return { emails: EmailStore.all()};
  },

  _onChange: function () {
    this.setState({ emails: EmailStore.all()});
    debugger;
  },


  componentDidMount: function () {
    var category;
    if (!Object.keys({}).length) {
      category = "/inbox";
    }
    EmailStore.addEmailsIndexChangeListener(this._onChange);
    EmailStore.addEmailDetailChangeListener(this._onChange);
    ApiUtil.fetchAllEmails(category);
  },

  componentWillReceiveProps: function (newProps) {
    ApiUtil.fetchAllEmails(newProps.params.category);
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
            var klass = "";
            if (email.read) {
              klass = "read";
            }

            return <div className={"inbox-row " + klass}> <EmailsIndexItem key={email.id} email={email}/></div>;
          })}
        </ul>
      {this.props.children}
      </div>
    );
  }







});
