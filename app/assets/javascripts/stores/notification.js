(function (root) {
  var _notification = "";
  var CHANGE_EVENT = "change";

  root.NotificationStore = $.extend({}, EventEmitter.prototype, {

    addChangeHandler: function (callback) {
      this.on(CHANGE_EVENT, callback);
    },

    removeChangeHandler: function (callback) {
      this.removeListener(CHANGE_EVENT, callback);
    },

    notification: function () {
       return _notification.notification;
    },

    dispatcherId: AppDispatcher.register(function (payload) {
      switch (payload.actionType) {

        case NotificationConstants.RECEIVE_NOTIFICATION:
          _notification = payload.notification;
          NotificationStore.emit(CHANGE_EVENT);
          break;
      }
    }),

  });
})(this);
