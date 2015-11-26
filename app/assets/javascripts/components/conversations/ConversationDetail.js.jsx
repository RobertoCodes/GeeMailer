window.ConversationDetail = React.createClass({

  mixins: [ReactRouter.History],

  getStateFromStore: function () {
    return { conversation: ConversationStore.find(parseInt(this.props.params.conversationId)) };
  },

  _onChange: function () {
    this.setState(this.getStateFromStore());
  },

  _updateReadState: function () {
    if (!this.state.conversation.read) {
      ApiUtil.markAsRead(this.state.conversation.id);
    }
  },

  componentWillReceiveProps: function (newProps) {
    ApiUtil.fetchSingleConversation(parseInt(newProps.params.conversationId));
  },

  componentDidMount: function () {
    ConversationStore.addConversationDetailChangeListener(this._onChange);
    ApiUtil.fetchSingleConversation(parseInt(this.props.params.conversationId));
    this.getStateFromStore();
  },

  componentWillUnmount: function () {
    ConversationStore.removeConversationDetailChangeListener(this._onChange);
  },

  deleteConversation: function (e) {
    e.preventDefault();
    ApiUtil.deleteConversation(this.state.conversation.id, function () {
      this.history.pushState(null, "/", {});
    }.bind(this));
  },

  render: function () {
    if (this.state) {
      return (
        <div className="emails-index">
          <button onClick={this.deleteConversation}>Delete Conversation</button>
          <EmailsIndex emails={this.state.conversation.emails}/>
        </div>
      );
    } else {
      return (<div></div>);
    }
  }
});
