window.EmailsIndexItem = React.createClass({
  mixins: [ReactRouter.History],

  toggleStar: function (e) {
    e.preventDefault();
    e.stopPropogation();
    ApiUtil.toggleStar(this.props.email.id);
  },

  toggleImportant: function (e) {
    ApiUtil.toggleImportant(this.props.email.id);
  },

  handleTrashed: function (e) {
    e.stopPropagation();
    ApiUtil.trashEmail(this.props.email.id);
  },

  // send trashemail to database, remove parent_email_id, send back parent_email and
  // rerender detail view by emitting detail view change


  render: function () {
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
    var shortBody = "- " + this.props.email.body.slice(0,100);

    return(
      <div className="email-list-item group">
      <button className={"star_button " + starClass} onClick={this.toggleStar}>Star</button>
      <button className={"important_button " + importantClass} onClick={this.toggleImportant}>Important</button>
      <ReactRouter.Link to={url} className="email-list-item group">
        <p className="email-name">{this.props.email.sender_email}</p>
        <p className="email-subject">{this.props.email.subject}</p>
        <p className="email-body-preview">{shortBody}</p>
      </ReactRouter.Link>
        {replyButton}
        {trashOrRestoreButton}
      </div>
    );
  }


});
