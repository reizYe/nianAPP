var app = angular.module("myApp",["ui.route"]);
//配置路由
app.config(function ($stateProvider,$urlRouterProvider) {
    $urlRouterProvider
        .otherwise('');
    $stateProvider.state('userlist',{

    })
        .state('contact',{

        })
        .state('find',{

        })
        .state('me',{

        })
})