
define(['main'],function(app) {
	app.factory("mallService",function($http,$q){
		var mallService = {};
		var baseUrl = "http://demoapptest.duapp.com";
		
		mallService.list = function(listObj){
			//console.log(listObj);
			var q = $q.defer();
			 $http({
				method:"GET",
				url:baseUrl+'/mall/list',
				params:listObj,
				headers: {
      				'Content-Type': 'application/x-www-form-urlencoded'
    			}
			}).then(function(succ){
				//console.log("success");
				//console.info(succ.data);
				q.resolve(succ.data);	
			},function(err){
				q.reject(err);
			});
			return q.promise;
		}
		
		mallService.saveM = function(listObj){
			console.log(listObj);
			var q = $q.defer();
			 $http({
				method:"POST",
				url:baseUrl+'/mall/save',
				data:listObj,
				headers: {
      				'Content-Type': 'application/x-www-form-urlencoded'
    			}
			}).then(function(succ){
				console.info('商品添加',succ.data);
				q.resolve(succ.data);
			},function(err){
				q.reject(err);
			});
			return q.promise;
		}
		
		mallService.getSize = function(){
			var q = $q.defer();
			 $http({
				method:"get",
				url:baseUrl+'/size/list'
			}).then(function(succ){
				//console.info(succ.data);
				q.resolve(succ.data);
			},function(err){
				q.reject(err);
			});
			return q.promise;
		}
		mallService.getColor = function(){
			var q = $q.defer();
			 $http({
				method:"get",
				url:baseUrl+'/color/list',
				//params:listObj,
				headers: {
      				'Content-Type': 'application/x-www-form-urlencoded'
    			}
			}).then(function(succ){
				//console.info(succ.data);
				q.resolve(succ.data);
			},function(err){
				q.reject(err);
			});
			return q.promise;
		}
		mallService.getType = function(){
			var q = $q.defer();
			 $http({
				method:"get",
				url:baseUrl+'/type/getByParentId',
				//params:listObj,
				headers: {
      				'Content-Type': 'application/x-www-form-urlencoded'
    			}
			}).then(function(succ){
				//console.info(succ.data);
				q.resolve(succ.data);
			},function(err){
				q.reject(err);
			});
			return q.promise;
		}
		
		mallService.deleteM = function(listObj){
			var q = $q.defer();
			 $http({
				method:"delete",
				url:baseUrl+'/mall/delete/'+listObj.m_id,	//占位符
				params:listObj,
				headers: {
      				'Content-Type': 'application/x-www-form-urlencoded'
    			}
			}).then(function(succ){
				console.info(succ.data);
				q.resolve(succ.data);
			},function(err){
				q.reject(err);
			});
			return q.promise;
		}
		
		//修改
		mallService.modifyM = function(listObj){
			console.info("modifyM",listObj);
			var q = $q.defer();
			 $http({
				method:"put",
				url:baseUrl+'/mall/update',
				params:listObj,
				headers: {
      				'Content-Type': 'application/x-www-form-urlencoded'
    			}
			}).then(function(succ){
				console.info('修改',succ.data);
				q.resolve(succ.data);
			},function(err){
				q.reject(err);
			});
			return q.promise;
		}
		
		
		
		return mallService;
	});
});



