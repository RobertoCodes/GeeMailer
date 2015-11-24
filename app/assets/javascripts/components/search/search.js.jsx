window.Search = React.createClass({

updateSearch: function (e) {
  e.preventDefault();
  var searchString = e.currentTarget.value;
  this.setState({search: searchString});
  ApiUtil.search(searchString);
},

getInitialState: function () {
  return {search: ""};
},

_onChange: function () {
  this.setState({results: SearchResultsStore.results()});
},

componentDidMount: function () {
    SearchResultsStore.addChangeHandler(this._onChange);

    ApiUtil.search(this.state.search);
  },

componentWillUnmount: function () {
  SearchResultsStore.removeChangeHandler(this._onChange);
},

render: function () {
  var renderResults="";
  if (this.state.results) {
      renderResults = this.state.results.map(function (result) {
        return <li><SearchListItem searchElement={result}/></li>;
      });
    }
  return (
    <div>
      <input type="text" onChange={this.updateSearch}>{this.state.search}</input>
      <ul>
          {renderResults}
      </ul>
    </div>
  );
}



});
