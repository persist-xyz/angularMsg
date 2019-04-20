
define(['main'],function(app) {
	app.factory("colorService",function($http,$q){
		var colorService = {};
		var baseUrl = "http://demoapptest.duapp.com";
		
		colorService.list = function(listObj){
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
		return colorService;
	});
});



