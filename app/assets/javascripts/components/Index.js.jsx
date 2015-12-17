window.Index = React.createClass({

  render: function () {
    return(
      <div>
        <nav className="bottom-nav group">
          <h2>by Robert Romano</h2>
        </nav>
        <div className="main-container group">
          <div className="sidebar">
            <SideBar/>
          <div className="contacts">
            Contacts:
            <ContactsIndex/>
          </div>
          </div>
          <div className="email-index">
            {this.props.children}
          </div>
         </div>
      </div>
    );
  }
});
