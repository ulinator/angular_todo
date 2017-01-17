app.controller('MainController', ['$scope', function($scope) {
	$scope.items = [ 
	  { 
	    name: 'Potatoes 5kg',
      done: false
	  }
	];
  // $scope.getTotalItems = function() {
  //   return $scope.items.length;
  // };
  // $scope.youHaveThingsText = "You have nothing to do!";
  // $scope.doYouHaveThings = function() {
  //   $scope.youHaveThingsText = "";
  //   if ( $scope.getTotalItems === 0 ) {
  //     $scope.youHaveThingsText = "You have nothing to do!";
  //   } else if ( $scope.getTotalItems === 1 ) {
  //     $scopeyouHaveThingsText = "You have one thing to do";
  //   } else {
  //     $scopeyouHaveThingsText = "You have {{ getTotalItems }} things to do";
  //   }
  // };
  $scope.addItem = function() {
    if (!$scope.inputItemName) {
      return null;
    } else {
      $scope.items.push( {name: $scope.inputItemName, done: false} );
      $scope.inputItemName = '';
    }
  };
  $scope.clearDone = function() {
    $scope.items = $scope.items.filter(function(item) {
      return !item.done;
    })
  };
}]);