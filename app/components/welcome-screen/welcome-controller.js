(function() {
    'use strict';

    angular
        .module('app')
        .controller('WelcomeController', WelcomeController);

    function WelcomeController() { 
    	var vm = this;
    	vm.who = 'World!';
    }
})();
