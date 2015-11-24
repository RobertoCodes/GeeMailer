window.SearchListItem = React.createClass({

mixins: [ReactRouter.History],

goToResultPage: function (e) {
  url = "/" + this.props.searchElement._type.toLowerCase() + "/" + this.props.searchElement.id;
  this.history.pushState({}, url, {});
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
