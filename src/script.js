/* global angular, _ */
;(function() {
angular.module('app', [])
  .controller('testCtrl', [ '$scope', function($scope) {
    $scope.data = 'yo';
  }]);
})();
