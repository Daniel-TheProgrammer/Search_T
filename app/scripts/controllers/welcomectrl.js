jobSearch.controller('welcomeCtrl', ['$state', '$scope', 'apiFactory', function($state, $scope, apiFactory){
	$scope.entry = {};
	$scope.none = null
	
	$scope.submit = function() {
	  	if($scope.entry.jobtitle) {
	  		$scope.none = null
	  		console.log("Input Accepted")
	  		$state.go('search.results')
	  		apiFactory.submission($scope.entry).then(function(d) {
	    		$scope.entries = d;
  			});
	  	} else {
	  		$scope.none = "You must enter a job title to begin"
	  		console.log("No Input")
		}
	}
}])