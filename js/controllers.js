angular.module('cv.controllers', [])

.controller('CvCtrl', function ($scope, dataFactory) {


    $scope.targetFilter = function (obj) {
        if (obj.hidden) {
            return false;
        } 
        else if (obj.targets == undefined) {
            return true;
        } 
        else {
            var targets = obj.targets.split(',');
            return (targets.length === _.intersection(targets, $scope.targets).length);
        }
    }

    function getCV(file) {
        return dataFactory.get(file).then(function (response) {
            $scope.cv = response.data;
        });
    }

    function getTargets(file) {
        return dataFactory.get(file).then(function (response) {
            $scope.targets = response.data.targets;
        });
    }

    getTargets('targets.json');
    getCV('cv.json');
    //getCV('pjw-20150327b.json');

});