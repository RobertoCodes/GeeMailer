window.ContactsIndexItem = React.createClass({
  mixins: [ReactRouter.History],

  handleContactClick: function (e) {
    e.preventDefault();
    var category;
    if (location.hash.split("/")[1].split("?")[0] === "") {
      category = "/inbox";
    } else {
      category = location.hash.split("/")[1].split("?")[0];
    }
    url = category + "/compose";
    var contact_email = {contact_email : this.props.contact.contact_email_address};
    this.history.pushState(contact_email, url);
  },

  showContactForm: function (e) {
    // setTimeout(function () {
    //   return (this.s)
    // }.bind(this), 1000)
  },

  render: function () {

    return <a onClick={this.handleContactClick} onMouseOver={this.showContactForm}
      className="contact-name"> {this.props.contact.name} </a>

  }
});
