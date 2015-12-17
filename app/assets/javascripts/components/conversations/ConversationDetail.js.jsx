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

  componentWillUpdate: function () {
    if (this.state && this.state.conversation.emails.length < 1) {
      this.history.goBack();
    }
  },

  componentDidMount: function () {
    ConversationStore.addConversationDetailChangeListener(this._onChange);
    ApiUtil.fetchSingleConversation(parseInt(this.props.params.conversationId),
      this.props.location.query.category);
    this.getStateFromStore();
  },

  componentWillUnmount: function () {
    this._updateReadState();
    ConversationStore.removeConversationDetailChangeListener(this._onChange);
  },

  deleteConversation: function (e) {
    e.preventDefault();
    this.history.goBack();
    ApiUtil.deleteConversation(this.state.conversation.id);
  },

  restoreConversation: function (e) {
    e.preventDefault();
    this.history.goBack();
    ApiUtil.restoreConversation(this.state.conversation.id);
  },

  render: function () {
    var trashOrRestoreButton = "";
    if (this.props.location.query.category === "trash") {
      trashOrRestoreButton =
      <button className="Gray-Button restore conversation" onClick={this.restoreConversation}>Restore Conversation</button>;
    } else {
      trashOrRestoreButton =
      <button className="trash-container conversation" onClick={this.deleteConversation}>
        <figure className="trash-button"></figure>
      </button>
    }
    if (this.state && this.state.conversation.emails.length > 0) {
      return (
        <div className="emails-index conversation">
          <span className="conversation-title">{this.state.conversation.emails[0].subject}</span>
          {trashOrRestoreButton}
          <EmailsIndex emails={this.state.conversation.emails}/>
          {this.props.children}
        </div>
      );
    } else {
      return (<div></div>);
    }
  }


});
