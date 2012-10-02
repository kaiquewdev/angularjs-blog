var Blog = angular.module(
    'myApp', []
);

Blog.config([
    '$routeProvider',
    '$locationProvider'
, function ( $routeProvider, $locationProvider ) {
    var routes = $routeProvider;
    
    // Home 
    routes.when('/', {
        templateUrl: '/partials/post/index',
        controller: IndexController
    });

    // New post
    routes.when('/post/new', {
        templateUrl: '/partials/post/new',
        controller: NewPostController
    });

    // Edit post
    routes.when('/post/edit/:id', {
        templateUrl: '/partials/post/edit',
        controller: EditPostController
    });

    // Read post
    routes.when('/post/read/:id', {
        templateUrl: '/partials/post/read',
        controller: ReadPostController
    });

    // Delete post
    routes.when('/post/delete/:id', {
        templateUrl: '/partials/post/delete',
        controller: DeletePostController
    });

    // Noware
    routes.otherwise({
        redirectTo: '/'    
    });

    $locationProvider.html5Mode( true );
}]);
