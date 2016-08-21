var QAToolApp = angular.module('QAToolApp', []);

QAToolApp.filter('titleCase', function() {
    return function(input) {
        input = input || '';
        return input.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
    };
})

QAToolApp.controller('QAToolCtrl', ['$scope', '$http', function ($scope, $http) {

    $scope.keys = [];
    $scope.data = [];
    $http.get('/WileyQATool/Details').then(function (response) {
        $scope.data = response.data;
        var obj = response.data[0];
        for (var j in obj) {
            var sub_key = j;
            $scope.keys.push(sub_key);
        }

    });
}]);