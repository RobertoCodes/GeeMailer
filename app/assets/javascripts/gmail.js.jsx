$(function () {
  var Router = ReactRouter.Router;
  var Route = ReactRouter.Route;
  var IndexRoute = ReactRouter.IndexRoute;

  var rootEl = document.getElementById('gmail');
  $(document).ready(function () {
    React.render((
      <Index/>
      // <Router>
      //   <Route path="/static_pages" component={Index}/>
      // </Router>
    ), rootEl);
  });
});
