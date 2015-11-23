window.Index = React.createClass({


  render: function () {
    return(
      <div className="main-container group">
        <div className="email-index">
          {this.props.children}
        </div>
        <div className="sidebar">
          <SideBar/>
        </div>
        <div className="contacts">
          <ContactsIndex/>
        </div>

       </div>
    );
  }
});


//also would like to add the "Side Bar" component here!
