window.SideBar = React.createClass({

   mixins: [ReactRouter.History],

  getInitialState: function () {
    return ({emailFormState: false});
  },

  showForm: function (e) {
    this.setState({emailFormState: true});
  },

  componentWillReceiveProps: function () {
    this.setState({emailFormState: false});
  },

  render: function () {
      return (
        <div id="#sidebar">
            <button onClick={this.showForm} className="compose-button">Compose</button>

          <ul className="sidebar-list">
              <li><a href="#/inbox">Inbox</a></li>

              <li><a href="#/starred">Starred</a></li>

              <li><a href="#/important">Important</a></li>

              <li><a href="#/sent">Sent Mail</a></li>

              <li><a href="#/trash">Trash</a></li>
          </ul>
          <EmailForm className="email-form" reveal={this.state.emailFormState}></EmailForm>
        </div>
      );
  }

});
