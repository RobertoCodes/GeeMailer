window.EmailsIndexItem = React.createClass({
  mixins: [ReactRouter.History],

  getInitialState: function () {
    if (this.props.expand) {
      return {expanded: true};
    } else {
      return {expanded: false};
    }
  },


  toggleStar: function (e) {
    e.preventDefault();
    ApiUtil.toggleStar(this.props.email.id);
  },

  toggleImportant: function (e) {
    ApiUtil.toggleImportant(this.props.email.id);
  },

  handleTrashed: function (e) {
    e.stopPropagation();
    ApiUtil.trashEmail(this.props.email.id);
  },

  handleClick: function (e) {
    expanded = this.state.expanded;
    this.setState({expanded: !expanded});
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
    if (this.props.email.email_type === "sent") {
      emailSender = <p className="email-name index-item">me</p>;
    } else {
      emailSender = <p className="email-name index-item">{this.props.email.sender_name ||
         this.props.email.sender_email}</p>;
    }      

    if (this.state.expanded) {
      view = 
      <div className= "group">
            <div onClick={this.handleClick} className="email-list-item group">
              <fig className="profile-pic"></fig>
              {emailSender}
              <span className="email-senders-email">{"<" + this.props.email.sender_email + ">"}</span>
              <span className="date">{this.getDate()}</span>
            </div>
            <EmailDetail  className="email-detail" email={this.props.email}/>

      </div>;
      klass += " expanded"
    } else {
      view =
        <div>
          <div onClick={this.handleClick} className="email-list-item group">
            <fig className="profile-pic"></fig>
            {emailSender}
            <span className="date">{this.getDate()}</span>
            <br/>
            <p className="email-body unexpanded">{shortBody}</p>
          </div>
        </div>;
    }
    var trashOrRestoreButton = "";
    if (this.props.email.trashed === false) {
      trashOrRestoreButton =   <button className="trash_button" onClick={this.handleTrashed}>Trash</button>;
    } else {
      trashOrRestoreButton = <button className="restore_button" onClick={this.handleRestore}>Restore</button>;
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
