window.ApiActions = {

  receiveOneEmail: function (email) {
    AppDispatcher.dispatch({
      actionType: EmailConstants.EMAIL_RECEIVED,
      email: email
    });
  },

  receiveAllEmails: function (emails) {
    AppDispatcher.dispatch({
      actionType: EmailConstants.EMAILS_RECEIVED,
      emails: emails
    });
  },

  receiveOneContact: function (contact) {
    AppDispatcher.dispatch({
      actionType: ContactConstants.CONTACT_RECEIVED,
      contact: contact
    });
  },

  receiveAllContacts: function (contacts) {
    AppDispatcher.dispatch({
      actionType: ContactConstants.CONTACTS_RECEIVED,
      contacts: contacts
    });
  },

  receiveAllResults: function (results) {
    AppDispatcher.dispatch({
      actionType: SearchConstants.RECEIVE_RESULTS,
      results: results
    });
  },






};
