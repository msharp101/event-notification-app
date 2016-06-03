(function() {
    'use strict';

    angular
        .module('app')
        .controller('WelcomeController', WelcomeController);

    WelcomeController.$inject = ['$location','welcomeFactory'];

    function WelcomeController($location, welcomeFactory) { 
    	var vm = this;
    	vm.loginVisible = false;
    	vm.toggleLogin = toggleLogin;
    	vm.attemptLogin = attemptLogin;

    	function toggleLogin() {
    		vm.loginVisible = !vm.loginVisible;
    	}

    	function attemptLogin() {

    		var payload = {
    			username: vm.username,
    			password: vm.password
    		};

			welcomeFactory.send(payload).then(function(response) { 

                $location.path("/landing-screen");
            }, function() {});

    	}
    };

})();
