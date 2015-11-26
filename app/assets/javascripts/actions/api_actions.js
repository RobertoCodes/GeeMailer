window.ApiActions = {

  receiveOneConversation: function (conversation) {
    AppDispatcher.dispatch({
      actionType: ConversationConstants.CONVERSATION_RECEIVED,
      conversation: conversation
    });
  },

  receiveAllConversations: function (conversations) {
    debugger;
    AppDispatcher.dispatch({
      actionType: ConversationConstants.CONVERSATIONS_RECEIVED,
      conversations: conversations
    });
  },

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


  removeEmails: function (emails) {
    AppDispatcher.dispatch({
      actionType: EmailConstants.EMAILS_REMOVED,
      emails: emails
    });
  },

  removeConversation: function (conversation) {
    AppDispatcher.dispatch({
      actionType: ConversationConstants.CONVERSATION_REMOVED,
      conversation: conversation
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
