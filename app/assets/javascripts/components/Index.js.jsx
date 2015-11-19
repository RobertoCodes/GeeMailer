window.Index = React.createClass({
  render: function () {
    return(
      <div className="main-container group">
        <div className="email-index">
          <EmailsIndex/>
        </div>
        <div className="sidebar">
          <SideBar/>
        </div>

        {this.props.children}
      </div>
    );
  }
});


//also would like to add the "Side Bar" component here!
