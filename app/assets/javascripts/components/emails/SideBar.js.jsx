window.SideBar = React.createClass({

   mixins: [ReactRouter.History],

  showForm: function (e) {
    e.preventDefault();
    url = this.props.location.pathname + "/compose";
    this.history.pushState(null, url, {});
  },


  render: function () {
    return (
      <div id="#sidebar">
          <button onClick={this.showForm}className="compose-button">Compose</button>

        <ul className="sidebar-list">
            <li><a href="#/inbox">Inbox</a></li>

            <li><a href="#/starred">Starred</a></li>

            <li><a href="#/important">Important</a></li>

            <li><a href="#/sent">Sent Mail</a></li>
        </ul>
      </div>
    );
  }
});
