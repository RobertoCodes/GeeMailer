$(function () {
  var Router = ReactRouter.Router;
  var Route = ReactRouter.Route;
  var IndexRoute = ReactRouter.IndexRoute;
  var RouteHandler = ReactRouter.RouteHandler;

  var rootEl = document.getElementById('gmail');
    React.render((
      <Router>
        <Route path="/" component={Index}>
          <IndexRoute component={EmailsIndex}/>
          <Route path=":category" component={EmailsIndex}>
            <Route path="compose" component={EmailForm}/>
          </Route>
          <Route path="compose" components={EmailForm}/>
          <Route path="email/:emailId" component={EmailDetail}>
          </Route>
        </Route>
      </Router>
    ), rootEl);
  });
