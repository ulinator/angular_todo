app.directive('todoItem', function() { 
  return { 
    restrict: 'E', 
    scope: { 
      info: '=' 
    }, 
    templateUrl: 'js/directives/todoItem.html' 
   //  link: function(scope, element, attrs) { 
   //    scope.itemName = $scope.items, 
   //    scope.completed = false, 

   //    scope.toggleActive = function() { 
   //      element.toggleClass('completed'); 
   //      if(scope.completed) { 
   //        scope.buttonText = "Install"; 
   //        scope.active = false; 
   //      } else { 
   //        scope.buttonText = "Uninstall"; 
   //        scope.active = true; 
   //      } 
   //    }
  	// }
  }; 
});