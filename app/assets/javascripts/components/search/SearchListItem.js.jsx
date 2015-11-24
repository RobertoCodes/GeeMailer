window.SearchListItem = React.createClass({


goToResultPage: function () {



},


render: function () {
  var result = this.props.searchElement;
  var output;
  if (result._type === "Email"){
    output = result.subject;
  } else {
    output = result.name;
  }
  return <span onClick={this.goToResultPage}>{output}</span>;

}



});
