$(function () {
  var Router = ReactRouter.Router;
  var Route = ReactRouter.Route;
  var IndexRoute = ReactRouter.IndexRoute;

  var rootEl = document.getElementById('gmail');
    React.render((
      <Router>
        <Route path="/" component={Index}>
        </Route>
        <Route path="/starred" component={Index}>
          <Route path="compose" component={EmailForm}/>
        </Route>
        <Route path="/important" component={Index}>
          <Route path="compose" component={EmailForm}/>
        </Route>
        <Route path="/sent" component={Index}>
          <Route path="compose" component={EmailForm}/>
        </Route>
        <Route path="/inbox" component={Index}>
          <Route path="compose" component={EmailForm}/>
        </Route>
        <Route path="email/:emailId" component={EmailDetail}>
        </Route>
      </Router>
    ), rootEl);
  });
