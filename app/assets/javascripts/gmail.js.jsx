$(function () {
  var Router = ReactRouter.Router;
  var Route = ReactRouter.Route;
  var IndexRoute = ReactRouter.IndexRoute;

  var rootEl = document.getElementById('gmail');
    React.render((
      <Router>
        <Route path="/" component={Index}>
          <Route path="/compose" component={EmailForm}/>
        </Route>
        <Route path="email/:emailId" component={EmailDetail}/>
      </Router>
    ), rootEl);
  });
