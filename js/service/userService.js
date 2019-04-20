
define(['main'],function(app) {
	app.factory("userService",function($http,$q){
		var userService = {};
		var baseUrl = "http://demoapptest.duapp.com";
		
		userService.list = function(listObj){
			var q = $q.defer();
			 $http({
				method:"GET",
				url:baseUrl+'/user/list',
				params:listObj
			}).then(function(succ){
				//console.info(succ.data);
				q.resolve(succ.data);
			},function(err){
				q.reject(err);
			});
			return q.promise;
		}
		return userService;
	});
});



