$(function () {
  var Router = ReactRouter.Router;
  var Route = ReactRouter.Route;
  var IndexRoute = ReactRouter.IndexRoute;

  var rootEl = document.getElementById('gmail');

  React.render((
    <Router>
      <Route path="/static_pages" component={index}/>
    </Router>
  ), rootEl);
});
