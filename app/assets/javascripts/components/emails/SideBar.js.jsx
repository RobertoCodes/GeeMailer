window.SideBar = React.createClass({


  render: function () {
    return (
      <div id="#sidebar">
        <ReactRouter.Link to="/compose">
          <button className="compose-button">Compose</button>
        </ReactRouter.Link>
        <ul className="sidebar-list">
          <li onClick={this.handleInbox}>Inbox</li>
          <li onClick={this.handleInbox}>Starred</li>
          <li onClick={this.handleInbox}>Important</li>
          <li onClick={this.handleInbox}>Sent Mail</li>
        </ul>
      </div>
    );
  }
});
