window.EmailDetail = React.createClass({

  getStateFromStore: function () {
    return { email: EmailStore.find(parseInt(this.props.params.emailId)) };
  },

  _onChange: function () {
    this.setState(this.getStateFromStore());
  },

  getInitialState: function () {
    return this.getStateFromStore();
  },

  componentWillReceiveProps: function (newProps) {
    ApiUtil.fetchSingleEmail(parseInt(newProps.params.emailId));
  },

  componentDidMount: function () {
    EmailStore.addEmailDetailChangeListener(this._onChange);
    ApiUtil.fetchSingleEmail(parseInt(this.props.params.emailId));
  },

  componentWillUnmount: function () {
    EmailStore.removeEmailDetailChangeListener(this._onChange);
  },

  render: function () {
    if (this.state.email) {
      var parsedChildren = [];
        if (this.state.email.children) {
          this.state.email.children.forEach(function (child) {
            parsedChildren.push(child);
          });
        }
      return (
        <div className="Email Detail">
          <h3> {this.state.email.subject} </h3>
          <h4> {this.state.email.body} </h4>
          <ul>
              {parsedChildren.map(function (child) {
                return <EmailsIndexItem key={child.id} email={child}/>;
              })}
          </ul>
        </div>
      );
    } else {
      return (<div></div>);
    }
  }




});
