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
    if (this.props.emails){
      lastEmail = this.props.emails.pop();
      lastEmailKlass = "";
        if (lastEmail.read) {
          lastEmailKlass = "read";
        }
    return(
        <div>
          <ul>
            {this.props.emails.map(function (email) {
              var klass = "";
              if (email.read) {
                klass = "read";
              }
              return <div key={email.id} className={"inbox-row conversation "}>
                       <EmailsIndexItem email={email}/>
                     </div>;
            })}
            <div className={"inbox-row conversation "}> <EmailsIndexItem expand="true"
              key={lastEmail.id} email={lastEmail}/></div>
          </ul>
          <ReplyForm previousEmail={lastEmail}/>
          {this.props.children}
        </div>
    );
    } else {
      return (<div></div>);
    }
  }


});
