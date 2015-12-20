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

	handlePrev: function (e) {
		e.preventDefault();
		var currentPage = this.props.page;

		if (currentPage === 0) {
			return;
		}

		var prevPage;
		if (currentPage > 1) {
	    	prevPage = currentPage - 1;
	    } else {
	    	prevPage = 1;
	    }
		this.history.pushState(null, this.props.category, {page: prevPage});
	},

	handleNext: function (e) {
		e.preventDefault();
		if (this.props.countLeft === 0) {
			return;
		}
		var currentPage = this.props.page;
		var nextPage = currentPage + 1;
		this.history.pushState(null, this.props.category, {page: nextPage});
	},
	//THIS IS WHEN I STARTED MAKING CHANGES

	render: function () {
		var nextView;
		var prevView;

		if (this.props.countLeft === 0) {
			nextView = <button disabled className="right arrow-container unclickable">
										<figure className="right arrow-button"></figure>
									</button>;
		} else {
			nextView = 	<button onClick={this.handleNext} className="right arrow-container">
										<figure className="right arrow-button"></figure>
									</button>;
		}
		if (this.props.page === 1) {
			prevView = <button disabled className="left arrow-container unclickable">
									<figure className="left arrow-button "></figure>
								 </button>;

		} else {
			prevView = <button onClick={this.handlePrev} className="left arrow-container">
									<figure className="left arrow-button"></figure>
								 </button>;
		}

	  return (
						<div className="paginator group">
							{this.props.pageStr}
							<div className="arrows-container">
								{prevView}
								{nextView}
				      </div>
						</div>
	  			);
	}

})
