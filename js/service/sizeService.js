
define(['main'],function(app) {
	app.factory("sizeService",function($http,$q){
		var sizeService = {};
		var baseUrl = "http://demoapptest.duapp.com";
		
		sizeService.list = function(listObj){
			var q = $q.defer();
			 $http({
				method:"GET",
				url:baseUrl+'/size/list',
				params:listObj
			}).then(function(succ){
				console.info(succ.data);
				q.resolve(succ.data);
			},function(err){
				q.reject(err);
			});
			return q.promise;
		}
		
		sizeService.saveM = function(listObj){
			console.log(listObj);
			var q = $q.defer();
			 $http({
				method:"POST",
				url:baseUrl+'/size/save',
				data:listObj,
				headers: {
      				'Content-Type': 'application/x-www-form-urlencoded'
    			}
			}).then(function(succ){
				console.info('尺寸添加',succ.data);
				q.resolve(succ.data);
			},function(err){
				q.reject(err);
			});
			return q.promise;
		}
		
		
		
		
		return sizeService;
	});
});



