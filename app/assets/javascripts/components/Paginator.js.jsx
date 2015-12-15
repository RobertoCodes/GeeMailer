window.Paginator = React.createClass({

	mixins: [ReactRouter.History],

	getCategory: function () {
		var category;
		if (location.pathname === "/") {
			category ="/inbox";
		} else if (location.hash.split("/")[1].split("?")[0] === "") {
	      category = "/inbox";
	    } else {
	      category = location.hash.split("/")[1].split("?")[0];
	    }
	    return category;
	},

	getCurrentPage: function () {
	 	var currentPage;
	 	if (location.hash.indexOf("page") !== -1){
	 		currentPage = parseInt(location.hash.split("page=")[1].split("&")[0]);
	 	} else {
	 		currentPage = 1;
	 	}
	 	return currentPage;
	},

	handlePrev: function () {
		var category = this.getCategory();
		var currentPage = this.getCurrentPage();
		var prevPage;
		if (currentPage > 1) {
	    	prevPage = currentPage - 1;
	    } else {
	    	prevPage = 1;
	    }
		this.history.pushState(null, category, {page: prevPage});
	},

	handleNext: function () {
		var category = this.getCategory();
		var currentPage = this.getCurrentPage();
		var nextPage = currentPage + 1;
		this.history.pushState(null, category, {page: nextPage});
	},

	render: function () {
		if (location.hash.indexOf("conversation") !== -1) {
			return (<div></div>);
		} else {
	  return (
			<div className="arrows-container">
				<button onClick={this.handlePrev} className="left arrow-container">
                	<figure className="left arrow-button"></figure>
              	</button>
              	<button onClick={this.handleNext} className="right arrow-container">
                	<figure className="right arrow-button"></figure>
              	</button>
            </div>
	  	)
		}
	}

})
