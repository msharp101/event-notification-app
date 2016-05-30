describe('welcomeFactory', function() {
	var welcomeFactory, $httpBackend;

	beforeEach(module('app'));

	beforeEach(inject(function($injector) {
		welcomeFactory = $injector.get('welcomeFactory');
		$httpBackend = $injector.get('$httpBackend');
	}));

	it('should send a post request when send is called', function() {
		var payload = {username:"msharp101", password:"password"};

		$httpBackend.expectPOST("http://localhost:8882/login", payload).respond(200);
		welcomeFactory.send(payload);
		 // assert
    	expect($httpBackend.flush).not.toThrow();
	});


});