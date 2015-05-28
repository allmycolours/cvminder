angular.module('cv.services', [])

.factory('dataFactory', ['$http', function ($http) {


    var urlBase = 'json/';
    var dataFactory = {};

    dataFactory.get = function (file) {

        return $http.get(urlBase + file);
    };




    return dataFactory;
}]);