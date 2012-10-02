var IndexController = function IndexController ( $scope, $http ) {
    $http.get('/api/posts').success(function ( data, status, headers, config ) {
        $scope.posts = data.posts;
    });    
};

var NewPostController = function NewPostController ( $scope, $http, $location ) {
    $scope.form = {};
    $scope.postSubmit = function () {
        $http.post('/api/post/new', $scope.form).success(function ( data ) {
            $location.path('/');    
        });    
    };
};

var ReadPostController = function ReadPostController ( $scope, $http, $routeParams ) {
    var post = {
        id: $routeParams.id
    };

    $scope.post = {};
    $http.get('/api/post/read/' + post.id).success(function ( data ) {
        $scope.post = data.post;
    });
};

var EditPostController = function EditPostController ( $scope, $http, $location, $routeParams ) {
    var post = {
        id: $routeParams.id
    };    

    $scope.post = {};
    $http.get('/api/post/read/' + post.id).success(function ( data ) {
        $scope.post = data.post;    
    });

    $scope.postEdit = function () {
        $http.put('/api/post/edit/' + post.id, $scope.form).success(function ( data ) {
            $location.url('/post/read' + post.id );    
        }); 
    };
};

var DeletePostController = function DeletePostController ( $scope, $http, $location, $routeParams ) {
    var post = {
        id: $routeParams.id
    };

    $http.get('/api/post/read/' + post.id).success(function ( data ) {
        $scope.post = data.post;    
    });

    $scope.postDelete = function () {
        $http.delete('/api/post/delete/' + post.id).success(function ( data ) {
            $location.url('/');
        });   
    };

    $scope.home = function () {
        $location.url('/');    
    };
};
