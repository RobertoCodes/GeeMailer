window.Index = React.createClass({


  render: function () {
    return(
      <div>
        <div className="main-container group">
          <div className="sidebar">
            <SideBar/>
          <p/>
          <p/>
          Contacts:
          <div className="contacts">
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
