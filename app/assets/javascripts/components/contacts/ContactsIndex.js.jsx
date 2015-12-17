window.ContactsIndex = React.createClass({
  getInitialState: function () {
    return { contacts: ContactStore.all(), selectedContact: null};
  },

  _onChange: function () {
    this.setState({ contacts: ContactStore.all()});
  },

  buildEmailForm: function (contact) {
    this.setState({selectedContact: contact});
  },

  componentWillReceiveProps: function () {
    this.setState({selectedContact: null});
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
            return (<div key={contact.id} onClick={this.buildEmailForm.bind(null, contact)}
                      className="contact-index-item">
                      <a  className="contact-name">{contact.name}</a>
                    </div>);
          }.bind(this))}
        </ul>
        <EmailForm contact={this.state.selectedContact}/>
      {this.props.children}
      </div>
    );
  }


});
