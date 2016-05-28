  
// logger.js
(function() {
    'use strict';

    angular
        .module('app')
        .controller('GreetingController', GreetingController);

    function GreetingController() { 
    	var vm = this;
    	vm.who = 'World!';
    }
})();
