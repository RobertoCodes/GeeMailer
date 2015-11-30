window.EmailsIndex = React.createClass({

  // componentWillReceiveProps: function (newProps) {
  //   ApiUtil.fetchAllEmails(newProps.params.category);
  // },
  //
  // //
  // componentWillUnmount: function () {
  //   EmailStore.removeEmailsIndexChangeListener(this._onChange);
  //   EmailStore.removeEmailDetailChangeListener(this._onChange);
  // },

  render: function () {
    debugger;
    lastEmail = this.props.emails.pop();
    lastEmailKlass = "";
      if (lastEmail.read) {
        lastEmailKlass = "read";
      }
    return(
      <div className="emails-index">
        <ul>
          {this.props.emails.map(function (email) {
            var klass = "";
            if (email.read) {
              klass = "read";
            }
            return <div className={"inbox-row " + klass}> <EmailsIndexItem key={email.id} email={email}/></div>;
          })}
          <div className={"inbox-row " + lastEmailKlass}> <EmailsIndexItem expand="true"
            key={lastEmail.id} email={lastEmail}/></div>
        </ul>
        <ReplyForm previousEmail={lastEmail}/>
      {this.props.children}
      </div>
    );
  }


});
