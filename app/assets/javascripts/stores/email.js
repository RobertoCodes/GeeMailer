(function () {



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

    dispatcherID: AppDispatcher.register(function (payload) {
      switch(payload.actionType) {
        case EmailConstants.EMAILS_RECEIVED
      }
    }


  )











  });
})();
