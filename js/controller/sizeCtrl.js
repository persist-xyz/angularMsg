define(['main','js/service/sizeService.js'], function(app) {
	app.controller("sizeCtrl", function($scope, sizeService) {
		
		$scope.getList = function(){
			var params = {s_id:'',s_name:''};
			sizeService.list(params).then(function(succ){
				console.log(succ);
				$scope.list = succ.data;
			},function(err){
				console.log("err");
			});
		}
		$scope.getList();
		
		//增加商品尺寸
		//点击确认按钮
		$scope.saveSize = function(){
			var params = {
				s_name:$scope.addSize.size,
				s_content:$scope.addSize.content
			}
			//console.log(params);
			sizeService.saveM(params).then(function(succ){
				console.info("success",succ);
				//$scope.list.push();
				$scope.getList();
			},function(err){
				console.info("error",err);
			});
			$('#myModal').modal('hide');
		}
		
		$scope.deleteSize = function(){
			
		}
		
		
	});
});


