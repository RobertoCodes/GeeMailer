window.SearchListItem = React.createClass({

render: function () {
  var result = this.props.searchElement;
  var url = "#/";

  var output;
  var type;
  if (result._type === "Email"){
    url += "conversation/" + result.conversation_id;
    output = result.subject;
  } else {
    output = result.name;
    url += "contact/" + result.id;
  }

  return <a href={url}>{output}</a>;
}

});
