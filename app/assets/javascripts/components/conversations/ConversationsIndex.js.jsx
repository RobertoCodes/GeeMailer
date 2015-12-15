
window.ConversationsIndex = React.createClass({
  getInitialState: function () {

    return { conversations: ConversationStore.all()};
  },

  _onChange: function () {
    this.setState({ conversations: ConversationStore.all()});
  },

  componentDidMount: function () {
    var category;
    category = this.props.location.pathname.split("/")[1];
    if (category === "") {
      category = "inbox"
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
    var category = "";
    var pageStr = "";
    if (this.props.params) {
      category = this.props.params.category;
    }

    if (this.state.conversations.length > 0) {
      var startNum = (this.state.conversations[0].page -1) * 3 + 1
      var endNum = startNum + this.state.conversations.length - 1

      pageStr = <span className="page-string"> {startNum + "-" + endNum + " of "}
        {this.state.conversations[0].total_count}</span>;
    }

    return(
      <div className="emails-index">
        {pageStr}
        <ul>
          {this.state.conversations.map(function (conversation) {
            var readClass = "";
            if (conversation.read) {
              readClass = "read";
            }
            return <div key={conversation.id} className={"inbox-row " + readClass}>
              <ConversationsIndexItem conversation={conversation} category= {category}/></div>;
          }.bind(this))}
        </ul>
        {this.props.children}
      </div>
    );
  }

});
