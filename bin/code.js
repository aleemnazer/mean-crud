angular.module('myModule', [])
.controller('myController', function($scope){
    $scope.customers = [
        {name: 'aleem Gondal', city: 'lahore'}, 
        {name: 'aleem khan', city: 'islambad'},
         {name: 'rahat', city: 'lahore'}
        ];
    $scope.add = function(){
        $scope.customers.push({name: $scope.first_binding, city: 'world'});
    } 
});