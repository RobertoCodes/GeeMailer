window.EmailsIndexItem = React.createClass({
  mixins: [ReactRouter.History],

  getInitialState: function () {
    if (this.props.expand) {
      return {expanded: true, contacts: ContactStore.all()};
    } else {
      return {expanded: false, contacts: ContactStore.all()};
    }
  },

  toggleStar: function (e) {
    e.preventDefault();
    ApiUtil.toggleStar(this.props.email.id);
  },

  toggleImportant: function (e) {
    ApiUtil.toggleImportant(this.props.email.id);
  },

  toggleTrashEmail: function (e) {
    e.stopPropagation();
    if (this.props.email.trashed) {
      ApiUtil.toggleTrashEmail(this.props.email.id, "trash");
    } else {
      ApiUtil.toggleTrashEmail(this.props.email.id);
    }
  },

  handleClick: function (e) {
    expanded = this.state.expanded;
    this.setState({expanded: !expanded});
  },

  addContact: function (e) {
    e.stopPropagation();
    e.preventDefault();
    var contact = {contact_email_address: this.props.email.sender_email,
                    name: this.props.email.sender_name
                  };
    var newContactList = this.state.contacts.concat(contact);
    this.setState({contacts : newContactList});
    ApiUtil.addContact(contact);
  },

  getDate: function () {
    var now = new Date();
    var emailTime = new Date(this.props.email.created_at);

    var clockTimeArr = emailTime.toLocaleTimeString().split(":");
    clockTimeArr[2] = clockTimeArr[2].slice(2);
    clockTime = clockTimeArr[0] + ":" + clockTimeArr[1] + clockTimeArr[2];

    emailDate = String(emailTime).split(" ").splice(1,2).join(" ");

    var result;

    var secondsPast = (now.getTime() - emailTime.getTime()) / 1000;
    if(secondsPast < 60){
      clockTimeArr = emailTime.toLocaleTimeString().split(":")
      clockTimeArr[2] = clockTimeArr[2].slice(2);

      result = clockTime + " (" + parseInt(secondsPast) + ' seconds ago)';
    }
    if(secondsPast < 3600){
      result = clockTime +  " (" + parseInt(secondsPast/60) + ' minutes ago)';
    }
    if(secondsPast <= 86400){
      result = clockTime + " (" + parseInt(secondsPast/3600) + ' hours ago)';
    }
    if(secondsPast > 86400){

        result = emailDate + " (" + parseInt(secondsPast/86400) + " days ago)";
    }
    return result;
  },



  // send trashemail to database, remove parent_email_id, send back parent_email and
  // rerender detail view by emitting detail view change


  render: function () {

    var view = "";
    var klass = "email-list-item group";
    var shortBody = this.props.email.body.split(" ").slice(0,20).join(" ");
    var emailSender;
    var figClass;
    if (this.props.email.email_type === "sent") {
      figClass = "profile-pic user"
      emailSender = <p className="email-name index-item">me</p>;
    } else {
      figClass = "profile-pic"
      emailSender = <p className="email-name index-item">{this.props.email.sender_name ||
         this.props.email.sender_email}</p>;
    }


    if (this.state.expanded) {
      var addContactButton = "";
      if (this.props.email.email_type === "received") {
        if (this.state.contacts.every( function (contact) {
          if (contact.contact_email_address !== this.props.email.sender_email) {
            return true;
          } else {
            return false;
          }
        }.bind(this)))
          {
            addContactButton = <button className="Gray-Button"
                                  onClick={this.addContact}>Add to Contacts</button>;
          }
      }
      var trashOrRestoreButton = "";
      if (this.props.email.trashed === false) {
        trashOrRestoreButton =
        <button className="trash-container" onClick={this.toggleTrashEmail}>
          <figure className="trash-button"></figure>
        </button>;
      } else {
        trashOrRestoreButton = <button className="Gray-Button restore email"
          onClick={this.toggleTrashEmail}>Restore</button>;
        }

      view =
      <div className= "group">
            <div onClick={this.handleClick} className="email-list-item group">
              <fig className={figClass}></fig>
              {emailSender}
              <span className="email-senders-email">{"<" + this.props.email.sender_email + ">"}</span>
              {addContactButton}
              <div className="date-trash-container group">
                <span className="date">{this.getDate()}</span>
                {trashOrRestoreButton}
              </div>
            </div>
            <EmailDetail  className="email-detail" email={this.props.email}/>

      </div>;
      klass += " expanded"
    } else {
      view =
        <div>
          <div onClick={this.handleClick} className="email-list-item group">
            <fig className={figClass}></fig>
            {emailSender}
            <span className="date">{this.getDate()}</span>
            {trashOrRestoreButton}
            <br/>
            <p className="email-body unexpanded">{shortBody}</p>
          </div>
        </div>;
    }
    var replyButton = "";
    if (this.props.email.trashed === false) {
      replyButton = <button className="reply_button" onClick={this.handleReply}>Reply</button>;
    }
    var url = "email/" + this.props.email.id;
    var starClass = "";
    if (this.props.email.starred) {
      starClass = "starred";
    }
    var importantClass = "";
    if (this.props.email.important) {
      importantClass = "important";
    }

    return(
        <div className={klass}>
          {view}
        </div>
    );
  }


});
