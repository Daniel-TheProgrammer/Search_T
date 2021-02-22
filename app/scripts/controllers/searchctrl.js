jobSearch.controller('SearchCtrl', ['$scope', 'apiFactory',	function($scope, apiFactory){
	$scope.predicate = ''
	$scope.reverse = true;

    //Orders the entries by a dynamic predicate
    $scope.order = function(predicate) {
	    $scope.reverse = ($scope.predicate === predicate) ? !$scope.reverse : false;
	    $scope.predicate = predicate;
	};

	// Filters out entries outside minimum payrate selected
	$scope.greaterThan = function(prop, val){
	    return function(item){
	      if (item[prop] > val) { 
	      	return true;
	    	} else if (val === undefined) {
	    	return true
  			}
		}
	};

	// Creates selected section in the third column
	$scope.select = function(selection) {
	  	$scope.selected = selection
	}

}]);