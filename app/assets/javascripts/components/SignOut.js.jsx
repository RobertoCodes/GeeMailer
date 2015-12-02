window.SignOut = React.createClass({
	
	handleSignOut: function (e) {
		e.preventDefault();
		ApiUtil.signOut();
	},

	render: function () {
		return (
			<button onClick={this.handleSignOut}>Sign Out</button>
		);
	}

});
