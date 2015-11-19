window.SideBar = React.createClass({


  render: function () {
    return (
      <div id="#sidebar">
        <ReactRouter.Link to="/compose">
          <button className="compose-button">Compose</button>
        </ReactRouter.Link>
        <ul className="sidebar-list">
          <ReactRouter.Link to="/inbox" className="sidebar-link">
            <li>Inbox</li>
          </ReactRouter.Link>
          <ReactRouter.Link to="/starred" className="sidebar-link">
            <li>Starred</li>
          </ReactRouter.Link>
          <ReactRouter.Link to="/important" className="sidebar-link">
            <li>Important</li>
          </ReactRouter.Link>
          <ReactRouter.Link to="/sent" className="sidebar-link">
            <li>Sent Mail</li>
          </ReactRouter.Link>
        </ul>
      </div>
    );
  }
});
