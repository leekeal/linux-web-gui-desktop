var linuxGui = require('../linux-gui');




linuxGui.directive('guiResizeReposition',['$rootScope','$compile',function($rootScope,$compile) {
	return {
		restrict: 'A',
		scope:false,
		link:function(scope,element,attrs){
			var relative = element.offsetParent();
			console.log(relative.scope().__height)
			scope.relative = {
				width:relative.width(),
				height:relative.height()
			}
		
		}
	};
}]);