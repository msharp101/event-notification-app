(function() {
    'use strict';

    angular
        .module('app')
        .config(['$routeProvider', routes]);

    function routes($routeProvider) { 
      $routeProvider
      .when('/', {
         templateUrl: './app/components/welcome-screen/welcome-view.html', 
         controller: 'WelcomeController',
         controllerAs: 'vm'
      })
      .otherwise({
         redirectTo: '/'
      });
    }

})();