window.Index = React.createClass({
  render: function () {
    debugger;
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
