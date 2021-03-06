$(function () {
  var Router = ReactRouter.Router;
  var Route = ReactRouter.Route;
  var IndexRoute = ReactRouter.IndexRoute;
  var RouteHandler = ReactRouter.RouteHandler;

  var rootEl = document.getElementById('gmail');
  if (rootEl !== null) {
    React.render((
      <div className="geemailer">
        <nav className="top-nav group">
          <a href="#/">
            GeeMailer
          </a>
          <Search className="search group"/>
          <h3>{rootEl.dataset.user}</h3>
          <SignOut className="SignOut"/>
        </nav>
        <Notification />
        <Router>
          <Route path="/" component={Index}>
            <IndexRoute component={ConversationsIndex}/>
            <Route path=":category" component={ConversationsIndex}>
            </Route>
            <Route path="compose" component={EmailForm}/>
            <Route path="email/:emailId" component={EmailDetail}/>
            <Route path="conversation/:conversationId" component={ConversationDetail}>
            </Route>
          </Route>
        </Router>
      </div>
    ), rootEl);
  }
  });
