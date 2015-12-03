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
  var resultsList="";
  if (this.state.results && this.state.results.length > 0) {
      var searchResults = this.state.results.map(function (result) {
        return <li><SearchListItem searchElement={result}/></li>;
      });
      resultsList = <ul>{searchResults}</ul>;
    }
  return (
    <div className="search group">
      <input className="search-input" type="text" onChange={this.updateSearch} value={this.state.search}>
        <button className="searchSubmit">Search</button>
      </input>
      {resultsList}
    </div>
  );
}

});
