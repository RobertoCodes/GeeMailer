(function () {

  var CONVERSATIONS_INDEX_CHANGE_EVENT = "conversationsIndexChangeEvent";
  var CONVERSATION_DETAIL_CHANGE_EVENT = "conversationDetailChangeEvent";

  var _conversations = [];
  var resetConversations = function (conversations) {
    _conversations = conversations;
  };

  var resetConversation = function (conversation) {
    var switched = false;
    _conversations.forEach(function (convo) {
      if (convo.id === conversation.id) {
        _conversations[_conversations.indexOf(convo)] = conversation;
        switched = true;
      }
    });
    if(!switched) {_conversations.push(conversation);}
  };

  var removeConversation = function (conversation) {
    _conversations.forEach(function (convo) {
      if (convo.id === conversation.id) {
        _conversations.splice(_conversations.indexOf(convo.id), 1);
      }
    });
  };

  window.ConversationStore = $.extend({}, EventEmitter.prototype, {

    all: function () {
      return _conversations.slice();
    },

    find: function (id) {
      var conversation;
      _conversations.forEach(function(convo) {
        if(convo.id === id) { conversation = convo;}
      });

      return conversation;
    },

    findNextId: function (id) {
      var conversation;
      _conversations.forEach(function(convo) {
        if(convo.id === id) { conversation = convo;}
      });
      var idx = _conversations.indexOf(conversation);
      return _conversations[idx+1].id;
    },

    addConversationsIndexChangeListener: function (callback) {
      this.on(CONVERSATIONS_INDEX_CHANGE_EVENT, callback);
    },

    removeConversationsIndexChangeListener: function (callback) {
      this.removeListener(CONVERSATIONS_INDEX_CHANGE_EVENT, callback);
    },

    addConversationsIndexItemChangeListener: function (callback) {
      this.on(CONVERSATIONS_INDEX_ITEM_CHANGE_EVENT, callback);
    },

    removeConversationsIndexItemChangeListener: function (callback) {
      this.removeListener(CONVERSATIONS_INDEX_ITEM_CHANGE_EVENT, callback);
    },

    addConversationDetailChangeListener: function (callback) {
      this.on(CONVERSATION_DETAIL_CHANGE_EVENT, callback);
    },

    removeConversationDetailChangeListener: function (callback) {
      this.removeListener(CONVERSATION_DETAIL_CHANGE_EVENT, callback);
    },


    dispatcherID: AppDispatcher.register(function (payload) {
      switch(payload.actionType) {
        case ConversationConstants.CONVERSATIONS_RECEIVED:
          resetConversations(payload.conversations);
          ConversationStore.emit(CONVERSATIONS_INDEX_CHANGE_EVENT);
          break;
        case ConversationConstants.CONVERSATION_RECEIVED:
          resetConversation(payload.conversation);
          ConversationStore.emit(CONVERSATION_DETAIL_CHANGE_EVENT);
          break;
        case ConversationConstants.CONVERSATION_REMOVED:
          removeConversation(payload.conversation);
          ConversationStore.emit(CONVERSATIONS_INDEX_CHANGE_EVENT);
      }
    })
  });
})();
