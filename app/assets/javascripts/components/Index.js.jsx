window.Index = React.createClass({


  render: function () {
    return(
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
    );
  }
});


//also would like to add the "Side Bar" component here!
