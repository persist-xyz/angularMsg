define(['angularAMD','uiRouter','uiBootstrap','bootstrap'],function(angularAMD){
	var app = angular.module('myApp',['ui.router','ui.bootstrap']);
	
	var loader = function($q, jsConfig){
		//注入服务
		//require 加载js文件 加载时异步的
		var q = $q.defer();
		//加载一个当前文件所需要的js文件
		//依赖加载
		require(jsConfig,function(){
			q.resolve();
		});
		return q.promise;
	}
	
	app.config(["$stateProvider","$urlRouterProvider",function($state,$url){
		$state.state('menu',{
			url:'/menu',	//显示在地址栏的名称
			views:{
				'leftMenu':{
					templateUrl:'views/leftMenu.html',
					controller:function($scope){
						$scope.leftRoute = [
							{text:'用户管理',state:'menu.userList'},
							{text:'商品管理',state:'menu.mallList'},
							{text:'商品尺寸',state:'menu.sizeList'},
							{text:'商品颜色',state:'menu.colorList'},
							{text:'商品类型',state:'menu.classList'}
						];
					}
				}
			}
		}).state('menu.userList',{
			url:'/userList',
			views:{
				'userList':{
					controller:'userCtrl',
					templateUrl:'views/userList.html'
				}
			},
			resolve:{
				loader:function($q){
					var q = $q.defer();
					require(['js/controller/userCtrl.js'],function(){
						q.resolve();
					});
					return q.promise;
				}
			}
		}).state('menu.mallList',{
			url:'/mallList',
			views:{
				'mallList':{
					controller:'mallCtrl',
					templateUrl:'views/mallList.html'
				}
			},
			resolve:{
				loader:function($q){
					var q = $q.defer();
					require(['js/controller/mallCtrl.js'],function(){
						q.resolve();
					});
					return q.promise;
				}
			}
		}).state('menu.sizeList',{
			url:'/sizeList',
			views:{
				'sizeList':{
					controller:'sizeCtrl',
					templateUrl:'views/sizeList.html'
				}
			},
			resolve:{
				loader:function($q){
					var q = $q.defer();
					require(['js/controller/sizeCtrl.js'],function(){
						q.resolve();
					});
					return q.promise;
				}
			}
		}).state('menu.colorList',{
			url:'/colorList',
			views:{
				'colorList':{
					controller:'colorCtrl',
					templateUrl:'views/colorList.html'
				}
			},
			resolve:{
				loader:function($q){
					var q = $q.defer();
					require(['js/controller/colorCtrl.js'],function(){
						q.resolve();
					});
					return q.promise;
				}
			}
		}).state('menu.classList',{
			url:'/classList',
			views:{
				'classList':{
					controller:'classCtrl',
					templateUrl:'views/classList.html'
				}
			},
			resolve:{
				loader:function($q){
					var q = $q.defer();
					require(['js/controller/classCtrl.js'],function(){
						q.resolve();
					});
					return q.promise;
				}
			}
		});
		
		//设置默认路由
		$url.otherwise('/menu');
	}]);
	
	return angularAMD.bootstrap(app);
});