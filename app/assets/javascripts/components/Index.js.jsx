window.Index = React.createClass({
  render: function () {
    var category = this.props.location.pathname;
    return(
      <div className="main-container group">
        <div className="email-index">
          <EmailsIndex category={category}/>
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
