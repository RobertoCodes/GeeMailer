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

handleClick: function () {
  this.setState({search: "", results: null})
},


render: function () {
  var resultsList="";
  if (this.state.results && this.state.results.length > 0) {
      var searchResults = this.state.results.map(function (result) {
        return <li onClick={this.handleClick}><SearchListItem searchElement={result}/></li>;
      }.bind(this));
      resultsList = <ul>{searchResults}</ul>;
    }
  return (
    <div className="search group">
      <input className="search-input" type="text" onChange={this.updateSearch} value={this.state.search}>
      </input>
      <button className="searchSubmit">Search</button>
      {resultsList}
    </div>
  );
}

});
