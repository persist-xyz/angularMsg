define(['main','js/service/userService.js'], function(app) {
	app.controller("userCtrl", function($scope, userService) {
		
		/*var params = {pageIndex:0,u_name:''};
		console.info(params);
		userService.list(params).then(function(succ){
			
			console.log(succ);
			$scope.list = succ.data;
			
		},function(err){
			console.log("err");
		});*/
		
		$scope.getList = function(i){
			var params = {pageIndex:0,u_name:''};
			i = i || 0;
			params.pageIndex = i;
			userService.list(params).then(function(e){
				$scope.list = e.data;
				$scope.bigTotalItems = e.count;
				console.log(e.count);
			},function(err){
				console.info("失败");
			})
		}
		
		$scope.setPage = function (pageNo) {
		  $scope.currentPage = pageNo;
		};
		$scope.selectPage = function() {
			$scope.getList($scope.bigCurrentPage-1);
		}
		$scope.bigTotalItems = 100;
		$scope.maxSize = 6; //分页按钮最多一侧显示多少个
		$scope.bigCurrentPage = 1; //当前显示的页数
		
		$scope.getList();
		
	});
});


