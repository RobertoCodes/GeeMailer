window.EmailsIndexItem = React.createClass({

  render: function () {
    debugger;
    return(
      <li>
        <p>Subject: {this.props.email.subject} </p>
        <p>Body: {this.props.email.body} </p>
      </li>
    );
  }





});
