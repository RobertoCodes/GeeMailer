window.EmailsIndexItem = React.createClass({
  mixins: [ReactRouter.History],

  showDetailView: function () {
    this.history.pushState(null, '/email/' + this.props.email.id, {});
  },

  render: function () {
    return(
      <li onClick={this.showDetailView} className="email-list-item">
        <p>Subject: {this.props.email.subject}</p>
      </li>
    );
  }





});
