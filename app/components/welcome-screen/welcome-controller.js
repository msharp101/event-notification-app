(function() {
    'use strict';

    angular
        .module('app')
        .controller('WelcomeController', WelcomeController);

    function WelcomeController($http) { 
    	var vm = this;
    	vm.loginVisible = false;
    	vm.toggleLogin = toggleLogin;
    	vm.attemptLogin = attemptLogin;

    	function toggleLogin() {
    		vm.loginVisible = !vm.loginVisible;
    	}

    	function attemptLogin() {

    		var req = {
				method: 'POST',
				url: 'http://localhost:8882/login',
				data: "username="+vm.username+"&password="+vm.password,
	    		headers: {'Content-Type': 'application/x-www-form-urlencoded'}
			}

			$http(req).then(function(response){
				alert(response.status);
			}, function(response){
				alert(response.status);
			});

    	}
    };

})();
