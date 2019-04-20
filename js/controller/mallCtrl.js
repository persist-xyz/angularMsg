define(['main','js/service/mallService.js'], function(app) {
	app.controller("mallCtrl", function($scope, mallService) {
		
		$scope.getList = function(i){
			var params = {m_name:'',pageIndex:0};
			i = i || 0;
			params.pageIndex = i;
			mallService.list(params).then(function(e){
				$scope.list = e.data;
				$scope.bigTotalItems = e.count;
				//console.log(e.count);
			},function(err){
				console.info("获取商品列表失败");
			});
		}
		
		$scope.selectPage = function() {
			console.info('最大页数',$scope.bigCurrentPage-1);
			$scope.getList($scope.bigCurrentPage-1);
		}
		$scope.bigTotalItems = 100;
		$scope.maxSize = 6; //分页按钮最多一侧显示多少个
		$scope.bigCurrentPage = 1; //当前显示的页数
		//获取商品列表
		$scope.getList();
		
		
		//增加商品
		//点击确认按钮
		$scope.saveMall = function(){
			var params = {
				m_name:$scope.addMall.name,
				m_title:$scope.addMall.title,
				m_content:$scope.addMall.content,
				m_detail:$scope.addMall.detail,
				m_price:$scope.addMall.price,
				m_number:$scope.addMall.num,
				m_size:$scope.addMall.size,
				m_color:$scope.addMall.color,
				m_type:$scope.addMall.type
			}
			//console.log(params);
			mallService.saveM(params).then(function(succ){
				console.info("success",succ);
				//$scope.list.push(params);
				$scope.getList($scope.bigCurrentPage-1);
			},function(err){
				console.info("error",err);
			});
			$('#myModal').modal('hide');
		}
		//获取尺寸，颜色，类型
		$scope.getAddMall = function(){
			//var params = {s_id:'',s_name:''};
			mallService.getSize().then(function(succ){
				$scope.size = succ.data;
				//console.log($scope.size);
			},function(err){
				console.info('失败',err);
			});
			
			mallService.getColor().then(function(succ){
				$scope.color = succ.data;
				//console.log($scope.color);
			},function(err){
				console.info('失败',err);
			});
			
			mallService.getType().then(function(succ){
				$scope.type = succ.data;
				//console.log($scope.type);
			},function(err){
				console.info('失败',err);
			});
			
		}
		$scope.getAddMall();
		
		//删除商品
		//点击删除按钮
		$scope.deleteMall = function(mall,$index){
			console.log(mall);
			var choice = window.confirm('确定要删除吗？');
			if (!choice) {
				$("myModal").hide();
				return;
			} 
			mallService.deleteM({m_id:mall.m_id}).then(function(succ){
				console.info("success",succ);
				$scope.list.splice($index,1);
			},function(err){
				console.info("error",err);
			})
		}
		
		//修改商品
		//点击修改按钮
		$scope.modify = function(mall){
			$scope.goods = mall;
			console.log($scope.goods);
			$scope.modifyMall = function(){
				var params = {
					m_id:$scope.goods.m_id,
					m_name:$scope.goods.m_name,
					m_title:$scope.goods.m_title,
					m_content:$scope.goods.m_content,
					m_detail:$scope.goods.m_detail,
					m_price:$scope.goods.m_price,
					m_number:$scope.goods.m_number,
					m_size:$scope.goods.m_size,
					m_color:$scope.goods.m_color,
					m_color:$scope.goods.m_type
				}
				mallService.modifyM(params).then(function(succ){
					console.info("success",succ);
					$scope.getList($scope.bigCurrentPage-1);
				},function(err){
					console.info("error",err);
				});
				$('#myModalUpdata').modal('hide');
			}
		}
		
		
		
		
		
		
		
		

		
		
	});
});


