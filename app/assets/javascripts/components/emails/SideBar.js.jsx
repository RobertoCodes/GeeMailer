window.SideBar = React.createClass({
  render: function () {
    return (
      <div id="#sidebar">
        <button className="compose-button" onClick={this.handleCompose}>Compose</button>
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
