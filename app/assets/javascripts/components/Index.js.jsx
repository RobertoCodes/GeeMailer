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
