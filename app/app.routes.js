(function() {
    'use strict';

    angular
        .module('app')
        .config(['$routeProvider', routes]);

    function routes($routeProvider) { 
      $routeProvider
      .when('/', {
         templateUrl: './app/components/greeting/show-greeting-1.html', 
         controller: 'GreetingController',
         controllerAs: 'vm'
      })
      .when('/show-greeting-1', {
         templateUrl: 'components/greeting/show-greeting-1.html', 
         controller: 'GreetingController',
         controllerAs: 'vm'
      })
      .otherwise({
         redirectTo: '/'
      });
    }

})();