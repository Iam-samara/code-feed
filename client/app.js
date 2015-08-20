angular.module('app', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {


  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'partials/home.html',
      controller: 'HomeController',
      controllerAs: 'homeCtrl'
    })
    .state('post', {
      url: '/post',
      templateUrl: 'partials/post.html',
      controller: 'PostController',
      controllerAs: 'postCtrl'
    })
    .state('comments', {
      url: '/comments',
      templateUrl: 'partials/comments.html',
      controller: 'CommentController',
      controllerAs: 'commentCtrl'
    })
    .state('oauth', {
      url: '/oauth',
      templateUrl: 'partials/login.html',
      controller: 'LoginController',
      controllerAs: 'loginCtrl'
    });

});



