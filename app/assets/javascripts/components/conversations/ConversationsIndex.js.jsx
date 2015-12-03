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
    var queryParams = this.props.location.query;
    ApiUtil.fetchAllConversations(category, queryParams.page || 1);
  },

  componentWillReceiveProps: function (newProps) {
    var queryParams = newProps.location.query;
    ApiUtil.fetchAllConversations(newProps.params.category, queryParams.page || 1);
  },



  componentWillUnmount: function () {
    ConversationStore.removeConversationsIndexChangeListener(this._onChange);
    ConversationStore.removeConversationDetailChangeListener(this._onChange);
  },

  render: function () {
    var category;
    if (location.hash.split("/")[1].split("?")[0] === "") {
      category = "/inbox";
    } else {
      category = location.hash.split("/")[1].split("?")[0];
    }
    var nextPage = (parseInt(this.props.location.query.page) || 1) + 1;


    return(
      <div className="emails-index">
        <a href={ "#" + category + "?page=" + nextPage }>
            Next
          </a>
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
