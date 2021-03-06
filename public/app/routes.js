angular.module('appRoutes',['ngRoute'])
    .config(function($routeProvider, $locationProvider) {
      $routeProvider
         .when('/', {
           templateUrl : 'app/views/pages/home.html'
         })
         .when('/about', {
           templateUrl : 'app/views/pages/about.html',
           authenticated : true
         })
         .when('/register', {
           controller : 'regCtrl',
           templateUrl : 'app/views/pages/users/register.html',
           controllerAs : 'register',
           authenticated : false
         })
         .when('/login', {
           templateUrl : 'app/views/pages/users/login.html',
           authenticated : false
         })
         .when('/logout', {
           templateUrl : 'app/views/pages/users/logout.html'
         })
         .when('/profile', {
           templateUrl : 'app/views/pages/users/profile.html',
           authenticated : true
         })
         .otherwise({ redirectTo : '/' });
         $locationProvider.html5Mode({
           enabled : true,
           requireBase : false
         });
    });
