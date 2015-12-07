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

  // send trashemail to database, remove parent_email_id, send back parent_email and
  // rerender detail view by emitting detail view change


  render: function () {
    var view = "";
    var klass = "email-list-item group";
    if (this.state.expanded) {
      view = <div onClick={this.handleClick} className="email-detail">
        <EmailDetail  email={this.props.email}/>
      </div>;
      klass += " expanded"
    } else {
      view =
        <div>
            <button className={"star_button " + starClass} onClick={this.toggleStar}>Star</button>
            <button className={"important_button " + importantClass} onClick={this.toggleImportant}>Important</button>
          <div onClick={this.handleClick} className="email-list-item group">
            <p className="email-name">{this.props.email.sender_email}</p>
            <p className="email-subject">{this.props.email.subject}</p>
            <p className="email-body-preview">{shortBody}</p>
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
    var shortBody = "- " + this.props.email.body.slice(0,100);
  
    return(
        <div className={klass}>
          {view}
          {replyButton}
          {trashOrRestoreButton}
        </div>
    );
  }


});
