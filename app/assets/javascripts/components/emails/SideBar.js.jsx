window.SideBar = React.createClass({


  render: function () {
    return (
      <div id="#sidebar">
        <ReactRouter.Link to="/compose">
          <button className="compose-button">Compose</button>
        </ReactRouter.Link>
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
