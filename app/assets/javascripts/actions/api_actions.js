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






};
