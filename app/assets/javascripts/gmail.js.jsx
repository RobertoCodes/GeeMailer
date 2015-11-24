$(function () {
  var Router = ReactRouter.Router;
  var Route = ReactRouter.Route;
  var IndexRoute = ReactRouter.IndexRoute;
  var RouteHandler = ReactRouter.RouteHandler;

  var rootEl = document.getElementById('gmail');
    React.render((
      <div>
        <nav>
          <h1>GeeMail</h1>
          <Search className="search group"/>
          <h3>{rootEl.dataset.user}</h3>
        </nav>
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
      </div>
    ), rootEl);
  });
