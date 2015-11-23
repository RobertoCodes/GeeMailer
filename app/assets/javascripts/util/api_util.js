window.ApiUtil = {
  fetchAllEmails: function (category) {
    $.ajax({
      url: "/api/emails",
      data: {category : category},
      success: function (emails) {
        ApiActions.receiveAllEmails(emails);
      }
    });
  },

  fetchSingleEmail: function (id) {
    $.ajax({
      url: "/api/emails/" + id,
      success: function (email) {
        ApiActions.receiveOneEmail(email);
      }

    });
  },

  createEmail: function (email, callback) {
    $.ajax({
      url: "/api/emails",
      method: "POST",
      data: {email: email},
      success: function (email) {
        ApiActions.receiveOneEmail(email);
        callback && callback();
      }

    });
  },

  markAsRead: function (id) {
    $.ajax({
      url: "/api/emails/" + id,
      method: "PATCH",
      data: {column: "read"},
      success: function (email) {
        ApiActions.receiveOneEmail(email);
      }
    })
  },

  toggleStar: function (id) {
    $.ajax({
      url: "/api/emails/" + id,
      method: "PATCH",
      data: {column: "starred"},
      success: function (email) {
        ApiActions.receiveOneEmail(email);
      }
    })
  },

  fetchAllContacts: function () {
    $.ajax({
      url: "/api/contacts",
      success: function (contacts) {
        ApiActions.receiveAllContacts(contacts);

      }
    });
  },

  fetchSingleContact: function (id) {
    $.ajax({
      url: "/api/contacts/" + id,
      success: function (contact) {
        ApiActions.receiveOneContact(contact);
      }

    });
  }


};
