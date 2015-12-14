window.ConversationDetail = React.createClass({

  mixins: [ReactRouter.History],

  getStateFromStore: function () {
    return { conversation: ConversationStore.find(parseInt(this.props.params.conversationId)) };
  },

  _onChange: function () {
    this.setState(this.getStateFromStore());
  },

  _updateReadState: function (id) {
    if (!this.state.conversation.read) {
      ApiUtil.markConversationAsRead(this.state.conversation.id);
    }
  },

  componentWillReceiveProps: function (newProps) {
    ApiUtil.fetchSingleConversation(parseInt(newProps.params.conversationId));
  },

  componentDidMount: function () {
    ConversationStore.addConversationDetailChangeListener(this._onChange);
    ApiUtil.fetchSingleConversation(parseInt(this.props.params.conversationId),
      this.props.location.query.category);
    this.getStateFromStore();
  },

  componentWillUnmount: function () {
    this._updateReadState()
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
          <p className="conversation-title">{this.state.conversation.emails[0].subject}</p>
          <EmailsIndex emails={this.state.conversation.emails}/>
          {this.props.children}

        </div>
      );
    } else {
      return (<div></div>);
    }
  }

  // <button onClick={this.deleteConversation}>Delete Conversation</button>

});
