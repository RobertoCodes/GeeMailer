window.ContactsIndex = React.createClass({
  getInitialState: function () {
    return { contacts: ContactStore.all()};
  },

  _onChange: function () {
    this.setState({ contacts: ContactStore.all()});
  },


  componentDidMount: function () {
    ContactStore.addContactsIndexChangeListener(this._onChange);
    ContactStore.addContactDetailChangeListener(this._onChange);
    ApiUtil.fetchAllContacts();
  },

  componentWillUnmount: function () {
    ContactStore.removeContactsIndexChangeListener(this._onChange);
    ContactStore.removeContactDetailChangeListener(this._onChange);
  },

  render: function () {
    return (
      <div className="contacts-index">
        <ul>
          {this.state.contacts.map(function (contact) {
            return (<div className="contact-index-item"> <ContactsIndexItem key={contact.id} contact={contact}/></div>);
          })}
        </ul>
      {this.props.children}
      </div>
    );
  }


});
