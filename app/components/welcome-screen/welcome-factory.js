(function() {
    'use strict';

    angular
        .module('app')
        .factory('welcomeFactory', welcomeFactory);

    welcomeFactory.$inject = ['$http'];

    function welcomeFactory($http) { 
    	return {
            send: send
        };

    	function send(payload) {
            return $http.post('http://localhost:8882/login', payload);
    	}
    }

})();
