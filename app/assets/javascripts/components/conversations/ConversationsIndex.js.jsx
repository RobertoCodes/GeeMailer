window.ConversationsIndex = React.createClass({
  getInitialState: function () {
    return { conversations: ConversationStore.all()};
  },

  _onChange: function () {
    this.setState({ conversations: ConversationStore.all()});
  },


  componentDidMount: function () {
    var category;
    if (!Object.keys({}).length) {
      category = "/inbox";
    }
    ConversationStore.addConversationsIndexChangeListener(this._onChange);
    ConversationStore.addConversationDetailChangeListener(this._onChange);
    ApiUtil.fetchAllConversations(category);
  },

  componentWillReceiveProps: function (newProps) {
    ApiUtil.fetchAllConversations(newProps.params.category);
  },



  componentWillUnmount: function () {
    ConversationStore.removeConversationsIndexChangeListener(this._onChange);
    ConversationStore.removeConversationDetailChangeListener(this._onChange);
  },

  render: function () {

    return(
      <div className="emails-index">
        <ul>
          {this.state.conversations.map(function (conversation) {
            return <div className={"inbox-row "}> <ConversationsIndexItem key={conversation.id}
              conversation={conversation}/></div>;
          })}
        </ul>
      {this.props.children}
      </div>
    );
  }







});
