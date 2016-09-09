angular.module('starter.controllers', [])


.controller('AppCtrl', function($scope, $ionicModal, $timeout){

})
.controller('MenuCtrl', function($scope) {})
.controller('VentanaCtrl', function($scope) {})
.controller('OpcionesCtrl', function($scope) {
  $scope.settings = {
    opciones: true
  };
});
