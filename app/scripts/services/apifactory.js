jobSearch.factory('apiFactory', ['$http', function($http){
  var service = {}
  	//Dynamically creates url String
  	stringmake = function(entries) {
  		var info = {};
  		console.log(entries)
  		info.jobtitle = entries.jobtitle.replace(" ", "+");

  		if (entries.location) {
  			info.location = "+in+" + entries.location.replace(" ", "+");
  		} else {
  			info.location = "";
  		};

  		if (entries.department) {
  			info.department = "+at+" + entries.department.replace(" ", "+");
  		} else {
  			info.department = ""
  		}

  		if (entries.time) {
  			info.time = "+" + entries.time.replace(" ", "+")
  		} else {
  			info.time = ""
  		}

  		if (!entries.level) {
  			entries.level = ""
  		}

  		return info.jobtitle + info.location + info.department + info.time + entries.level;
  	}

  	//attaches dunamic url component to base url
  	var urlfunc = function(entry) {
  		  var baseurl = 'https://nulltonode.com/jobs/search.json?query='
  	   return baseurl + stringmake(entry)
  	}

  	// Makes API call.
    service.submission = function(entry) {
      console.log(urlfunc(entry))
      var promise = $http({
          method: 'GET',
          url: urlfunc(entry)
      }).then(function successCallback(response) {
          service.data = response.data;
          return response.data;
      }, function errorCallback(response) {
          console.log(response)
      });
      // Return the promise to the controller
      return promise;
     }





  return service;
}])
