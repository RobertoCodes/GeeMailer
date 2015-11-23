window.EmailsIndexItem = React.createClass({
  mixins: [ReactRouter.History],


  render: function () {
    var url = "email/" + this.props.email.id;


    return(
      <ReactRouter.Link to={url} className="email-list-item group">
        <p className="email-name">{this.props.email.sender_email}</p><p className="email-subject">{this.props.email.subject}</p>
      </ReactRouter.Link>
    );
  }
});
