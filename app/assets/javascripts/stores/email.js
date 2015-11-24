(function () {

  var EMAILS_INDEX_CHANGE_EVENT = "emailsIndexChangeEvent";
  var EMAIL_DETAIL_CHANGE_EVENT = "emailDetailChangeEvent";

  var _emails = [];
  var resetEmails = function (emails) {
    _emails = emails;
  };

  var resetEmail = function (email) {
    debugger;
    var switched = false;
    _emails.forEach(function (em) {
      if (em.id === email.id) {
        _emails[_emails.indexOf(em)] = email;
        switched = true;
      }
    });
    if(!switched) {_emails.push(email);}
    debugger;
  };

  var removeEmails = function (emails) {
    for (var i = 0; i < _emails.length; i++) {
      for (var j = 0; j < emails.length; j++) {
        if (_emails[i].id === emails[j].id) {
          _emails.splice(i, 1);
        }
      }
    }
  };

  window.EmailStore = $.extend({}, EventEmitter.prototype, {

    all: function () {
      return _emails.slice();
    },

    find: function (id) {
      var email;
      _emails.forEach(function(em) {
        if(em.id === id) { email = em;}
      });

      return email;
    },

    addEmailsIndexChangeListener: function (callback) {
      this.on(EMAILS_INDEX_CHANGE_EVENT, callback);
    },

    removeEmailsIndexChangeListener: function (callback) {
      this.removeListener(EMAILS_INDEX_CHANGE_EVENT, callback);
    },

    addEmailDetailChangeListener: function (callback) {
      this.on(EMAIL_DETAIL_CHANGE_EVENT, callback);
    },

    removeEmailDetailChangeListener: function (callback) {
      this.removeListener(EMAIL_DETAIL_CHANGE_EVENT, callback);
    },


    dispatcherID: AppDispatcher.register(function (payload) {
      switch(payload.actionType) {
        case EmailConstants.EMAILS_RECEIVED:
          resetEmails(payload.emails);
          EmailStore.emit(EMAILS_INDEX_CHANGE_EVENT);
          break;
        case EmailConstants.EMAIL_RECEIVED:
          resetEmail(payload.email);
          EmailStore.emit(EMAIL_DETAIL_CHANGE_EVENT);
          break;
        case EmailConstants.EMAILS_REMOVED:
          removeEmails(payload.emails);
          EmailStore.emit(EMAILS_INDEX_CHANGE_EVENT);

      }
    })











  });
})();
