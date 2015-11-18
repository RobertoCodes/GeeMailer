window.EmailsIndexItem = React.createClass({
  mixins: [ReactRouter.History],


  render: function () {
    var url = "email/" + this.props.email.id;
    return(
      <ReactRouter.Link to={url} className="email-list-item">
        <p>Subject: {this.props.email.subject}</p>
      </ReactRouter.Link>
    );
  }





});
