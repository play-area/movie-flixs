var customDirectives=(function(){

	app.directive('navUpper', function(){
				var directive = {};
				directive.restrict= 'E'; 
				directive.templateUrl= 'includes/navigationUpper.html';
				return directive;
			}
		);
	app.directive('navLower', function(){
				var directive = {};
				directive.restrict= 'E';
				directive.templateUrl='includes/navLower.html';
				return directive;
			}
		);
	app.directive('headerContent', function(){
				var directive = {};
				directive.restrict= 'E';
				directive.templateUrl= 'includes/headerContent.html';
				return directive;
			}
		);
	
})();