window.SignOut = React.createClass({
	
	handleSignOut: function (e) {
		e.preventDefault();
		ApiUtil.signOut();
	},

	render: function () {
		return (
			<button className="signout" onClick={this.handleSignOut}>Sign Out</button>
		);
	}

});
