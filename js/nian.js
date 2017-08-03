var app = angular.module('myApp', ['ui.router']);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('');
    $stateProvider
        .state('jiben',{
            url:'/jiben',
            templateUrl:'views/jiben.html'
        })
        .state('guanzhu',{
            url:'/guanzhu',
            templateUrl:'views/guanzhu.html'
        })
        .state('faxian',{
            url:'/faxian',
            templateUrl:'views/faxian.html'
        })
        .state('tianjia',{
            url:'/tianjia',
            templateUrl:'views/tianjia.html'
        })
        .state('xiaoxi',{
            url:'/xiaoxi',
            templateUrl:'views/xiaoxi.html'
        })
}]);