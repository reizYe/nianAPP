var app = angular.module('myApp', ['ui.router']);

app.config( function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/basic');
    $stateProvider
        .state('basic',{
            url:'/basic',
            controller:'basicCtrl',
            templateUrl:'views/basic.html'
        })
        // .state('basic/basicdaily',{
        //     url:'/basic/basicdaily',
        //     controller:'basicdailyCtrl',
        //     templateUrl:'views/basic/basicdaily.html'
        // })
        .state('focus',{
            url:'/focus',
            controller:'focusCtrl',
            templateUrl:'views/focus/focus.html'
        })
        .state('find',{
            url:'/find',
            controller:'findCtrl',
            templateUrl:'views/find.html'
        })
        .state('find/findmore',{
        url:'/find/findmore',
        controller:'findmoreCtrl',
        templateUrl:'views/find/findmore.html'
    })
        .state('add',{
            url:'/add',
            templateUrl:'views/add.html'
        })
        .state('message',{
            url:'/message',
            templateUrl:'views/message.html'
        })
});

