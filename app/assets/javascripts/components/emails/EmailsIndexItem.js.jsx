window.EmailsIndexItem = React.createClass({
  mixins: [ReactRouter.History],

  toggleStar: function () {
    ApiUtil.toggleStar(this.props.email.id);
  },

  toggleImportant: function () {
    ApiUtil.toggleImportant(this.props.email.id);
  },


  render: function () {
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
      <div className="email-list-item group">
      <button className={"star_button " + starClass} onClick={this.toggleStar}>Star</button>
      <button className={"important_button " + importantClass} onClick={this.toggleImportant}>Important</button>
      <ReactRouter.Link to={url} className="email-list-item group">
        <p className="email-name">{this.props.email.sender_email}</p><p className="email-subject">{this.props.email.subject}</p>
      </ReactRouter.Link>
      </div>
    );
  }


});
