(function() {
    'use strict';

    angular
        .module('app')
        .controller('WelcomeController', WelcomeController);

    function WelcomeController() { 
    	var vm = this;
    	vm.who = 'World!';
    	vm.loginVisible = false;
    	vm.toggleLogin = toggleLogin;

    	function toggleLogin() {
    		vm.loginVisible = !vm.loginVisible;
    	}
    };

    

})();
