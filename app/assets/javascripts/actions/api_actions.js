window.ApiActions = {

  receiveOneEmail: function (email) {
    ApiDispatcher.dispatch({
      actionType: EmailConstants.EMAIL_RECEIVED,
      email: email
    });
  },

  receiveAllEmails: function (emails) {
    ApiDispatcher.dispatch({
      actionType: EmailConstants.EMAILS_RECEIVED,
      emails: emails
    });
  },

  




};
