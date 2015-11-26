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
        </ul>
        <ReplyForm previousEmail={this.props.emails[this.props.emails.length-1]}/>
      {this.props.children}
      </div>
    );
  }


});
