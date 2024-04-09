/**
 * Filing Controller
 * @namespace Filing
 * @memberOf Controllers
 */

(function () {

    "use strict";

    function filingListCtrl(filingService, vm, b) {
        var c;
        var data = {};

        filingService.get('filings').then(function (results) {
            data = results;
            filingService.toast(results);
            vm.stores = data, vm.searchKeywords = "", vm.filteredStores = [], vm.row = "", vm.select = function (b) {
                var c, d;
                return d = (b - 1) * vm.numPerPage, c = d + vm.numPerPage, vm.currentPageStores = vm.filteredStores.slice(d, c)
            }, vm.onFilterChange = function () {
                return vm.select(1), vm.currentPage = 1, vm.row = ""
            }, vm.onNumPerPageChange = function () {
                return vm.select(1), vm.currentPage = 1
            }, vm.onOrderChange = function () {
                return vm.select(1), vm.currentPage = 1
            }, vm.search = function () {
                return vm.filteredStores = b("filter")(vm.stores, vm.searchKeywords), vm.onFilterChange()
            }, vm.order = function (c) {
                return vm.row !== c ? (vm.row = c, vm.filteredStores = b("orderBy")(vm.stores, c), vm.onOrderChange()) : void 0
            }, vm.numPerPageOpt = [3, 5, 10, 20], vm.numPerPage = vm.numPerPageOpt[2], vm.currentPage = 1, vm.currentPageStores = [], (c = function () {
                return vm.search(), vm.select(vm.currentPage)
            })()

        });

    }
    angular
            .module("app.filing")
            .controller("filingListCtrl", filingListCtrl);
    filingListCtrl.$inject = ["filingService", "$scope", "$filter"];
})();
