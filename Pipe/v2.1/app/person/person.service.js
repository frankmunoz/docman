(function () {
    "use strict";

    function filingService($http, log) {
        var serviceBase = 'http://localhost/auth/api/v1/';
        var obj = {};

        obj.toast = function (data) {
            log.log(data.message);
        };

        obj.get = function (q) {
            return $http.get(serviceBase + q).then(function (results) {
                return results.data;
            });
        };

        return obj;
    }
    angular.module("app.filing").factory("filingService", ['$http', 'logger', filingService])
}
());
