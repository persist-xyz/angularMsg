
var ngFilter = angular.module("ng.filter",[]);

ngFilter.filter("moneyFilter",function(){
	return function(val,argu1){
		return argu1+val;
	}
})



