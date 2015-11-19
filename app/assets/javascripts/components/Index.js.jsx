window.Index = React.createClass({
  render: function () {
    return(
      <div>
        <div className="email-index">
          <EmailsIndex/>
        </div>

        {this.props.children}
      </div>
    );
  }
});


//also would like to add the "Side Bar" component here!
