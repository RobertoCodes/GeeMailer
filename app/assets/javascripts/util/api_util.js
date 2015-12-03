window.ApiUtil = {

  signOut: function () {
    $.ajax({
      url: "/session",
      method: "DELETE",
      success: function () {
        window.location.href= "/session/new";
      }
    });
  },
  
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

  fetchAllConversations: function (category, page) {
    debugger;
    $.ajax({
      url: "/api/conversations",
      data: {category : category, page : page},
      success: function (conversations) {
        ApiActions.receiveAllConversations(conversations);
      }
    });
  },

  fetchSingleConversation: function (id) {
    $.ajax({
      url: "/api/conversations/" + id,
      success: function (conversation) {
        ApiActions.receiveOneConversation(conversation);
      }
    });
  },

  createEmail: function (email, callback) {
    $.ajax({
      url: "/api/emails",
      method: "POST",
      data: {email: email},
      success: function (conversation) {
        ApiActions.receiveOneConversation(conversation);
        callback && callback();
      }
    });
  },

  trashEmail: function (id, callback) {
    $.ajax({
      url: "/api/emails/" + id,
      method: "PATCH",
      data: {column: "trashed"},
      success: function (conversation) {
        ApiActions.receiveOneConversation(conversation);
      }
    });
  },

  deleteConversation: function (id, callback) {
    $.ajax({
      url: "/api/conversations/" + id,
      method: "DELETE",
      success: function (conversation) {
        ApiActions.receiveOneConversation(conversation);
        callback && callback();
      }
    });
  },

  search: function (searchString) {
    $.ajax({
      url: "/api/search/",
      method: "GET",
      data: {search: searchString},
      success: function (results) {
        ApiActions.receiveAllResults(results);
      }
    });
  },

  markAsRead: function (id) {
    $.ajax({
      url: "/api/emails/" + id,
      method: "PATCH",
      data: {column: "read"},
      success: function (conversation) {
        ApiActions.receiveOneConversation(conversation);
      }
    });
  },

  toggleStar: function (id) {
    $.ajax({
      url: "/api/emails/" + id,
      method: "PATCH",
      data: {column: "starred"},
      success: function (conversation) {
        ApiActions.receiveOneConversation(conversation);
      }
    });
  },

  toggleImportant: function (id) {
    $.ajax({
      url: "/api/emails/" + id,
      method: "PATCH",
      data: {column: "important"},
      success: function (conversation) {
        ApiActions.receiveOneConversation(conversation);
      }
    });
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
