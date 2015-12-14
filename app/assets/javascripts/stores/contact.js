(function () {

  var CONTACTS_INDEX_CHANGE_EVENT = "contactIndexChangeEvent";
  var CONTACT_DETAIL_CHANGE_EVENT = "contactDetailChangeEvent";

  var _contacts = [];
  var resetContacts = function (contacts) {
    _contacts = contacts;
  };

  var resetContact = function (contact) {
    var switched = false;
    _contacts.forEach(function (ct) {
      if (ct.id === contact.id) {
        _contacts[_contacts.indexOf(ct)] = contact;
        switched = true;
      }
    });
    if(!switched) {_contacts.push(contact);}
  };

  var sortContacts = function () {
    var sortedContacts =  _contacts.slice().sort( function (c1, c2) {
      if (c1.name.toLowerCase() > c2.name.toLowerCase()) {
        return 1;
      } else if (c1.name.toLowerCase() < c2.name.toLowerCase()) {
          return -1;
      } else {
          return 0;
      }
    });
    return sortedContacts;
  };

  window.ContactStore = $.extend({}, EventEmitter.prototype, {

    all: function () {
      if (_contacts.length < 2) {
        return _contacts.slice();
      } else {
       return sortContacts();
    }
    },

    find: function (id) {
      var contact;
      _contacts.forEach(function(ct) {
        if(ct.id === id) { contact = ct;}
      });

      return contact;
    },

    addContactsIndexChangeListener: function (callback) {
      this.on(CONTACTS_INDEX_CHANGE_EVENT, callback);
    },

    removeContactsIndexChangeListener: function (callback) {
      this.removeListener(CONTACTS_INDEX_CHANGE_EVENT, callback);
    },

    addContactDetailChangeListener: function (callback) {
      this.on(CONTACT_DETAIL_CHANGE_EVENT, callback);
    },

    removeContactDetailChangeListener: function (callback) {
      this.removeListener(CONTACT_DETAIL_CHANGE_EVENT, callback);
    },


    dispatcherID: AppDispatcher.register(function (payload) {
      switch(payload.actionType) {
        case ContactConstants.CONTACTS_RECEIVED:
          resetContacts(payload.contacts);
          ContactStore.emit(CONTACTS_INDEX_CHANGE_EVENT);
          break;
        case ContactConstants.CONTACT_RECEIVED:
          resetContact(payload.contact);
          ContactStore.emit(CONTACT_DETAIL_CHANGE_EVENT);
          break;
      }
    })

  });
})();
