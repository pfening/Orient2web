var app = angular.module('sampleapp', ['angularModalService', 'ngAnimate']);

app.controller('SampleController', ['$scope', 'ModalService', function($scope, ModalService) {

  $scope.complexResult = null;

  $scope.showComplex = function() {

    ModalService.showModal({
      templateUrl: "complex.html",
      controller: "ComplexController",
      inputs: {
        title: "A More Complex Example"
      }
    }).then(function(modal) {
      modal.element.modal();
      modal.close.then(function(result) {
        $scope.complexResult  = "Name: " + result.name + ", age: " + result.age;
      });
    });

  };
}]);
