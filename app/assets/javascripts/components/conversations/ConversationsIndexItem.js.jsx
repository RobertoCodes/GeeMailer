window.ConversationsIndexItem = React.createClass({
  mixins: [ReactRouter.History],

  toggleStar: function (e) {
    e.preventDefault();
    ApiUtil.toggleStar(this.props.conversation.last_email.id);
  },

  toggleImportant: function (e) {
    ApiUtil.toggleImportant(this.props.conversation.last_email.id);
  },

  handleTrashed: function (e) {
    e.stopPropagation();
    ApiUtil.trashEmail(this.props.conversation.last_email.id);
  },

  handleClick: function (e) {
    e.preventDefault();
    var url = "conversation/" + this.props.conversation.id;
    this.history.pushState(null, url, {category: this.props.category});
  },

  // send trashemail to database, remove parent_email_id, send back parent_email and
  // rerender detail view by emitting detail view change

  render: function () {
    if (this.props.conversation.last_email) {
    var emailDate = new Date(this.props.conversation.last_email.created_at);
    emailDate = String(emailDate).split(" ").splice(1,2).join(" ");
    var email_name = this.props.conversation.last_email.sender_name ||
      this.props.conversation.last_email.sender_email;
    if (this.props.conversation.num_emails > 1) {
      email_name += " (" + this.props.conversation.num_emails + ")";
    }

    // var trashOrRestoreButton = "";
    // if (this.props.conversation.last_email.trashed === false) {
    //   trashOrRestoreButton =   <button className="trash_button" onClick={this.handleTrashed}>Trash</button>;
    // } else {
    //   trashOrRestoreButton = <button className="restore_button" onClick={this.handleRestore}>Restore</button>;
    // }
    // var replyButton = "";
    // if (this.props.conversation.last_email.trashed === false) {
    //   replyButton = <button className="reply_button" onClick={this.handleReply}>Reply</button>;
    // }
    var starClass = "";
    if (this.props.conversation.last_email.starred) {
      starClass = "starred";
    }
    var importantClass = "";
    if (this.props.conversation.last_email.important) {
      importantClass = "important";
    }

    var shortBody = "- " + this.props.conversation.last_email.body.split(" ").slice(0,16).join(" ");

    return(
      <div className="email-list-item group">
      <button className={"star_button " + starClass} onClick={this.toggleStar}></button>
      <button className={"important_button " + importantClass} onClick={this.toggleImportant}></button>
      <section onClick={this.handleClick} className="email-list-item group">
        <p className="email-name">{email_name}</p>
        <p className="email-subject">{this.props.conversation.last_email.subject}</p>
        <p className="email-body-preview">{shortBody}</p>
        <p className="email-date">{emailDate}</p>
      </section>
      </div>
    );
  }  else {
    return (<div></div>);
  }

}
});
