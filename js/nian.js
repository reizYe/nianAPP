var app = angular.module('myApp', ['ui.router']);

app.config( function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/basic');
    $stateProvider
        .state('basic',{
            url:'/basic',
            controller:'basicCtrl',
            templateUrl:'views/basic.html'
        })
        .state('basic/basiccollect',{
            url:'/basic/basiccollect',
            controller:'basiccollectCtrl',
            templateUrl:'views/basic/basiccollect.html'
        })
        .state('basic/basicsetting',{
            url:'/basic/basicsetting',
            controller:'basicsettingCtrl',
            templateUrl:'views/basic/basicsetting.html'
        })
        .state('basic/basicmoney',{
            url:'/basic/basicmoney',
            controller:'basicmoneyCtrl',
            templateUrl:'views/basic/basicmoney.html'
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
        .state('focus/focusactive',{
            url:'/focus/focusactive',
            controller:'focusactiveCtrl',
            templateUrl:'views/focus/focusactive.html'
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
        .state('find/findnew',{
            url:'/find/findnew',
            controller:'findnewCtrl',
            templateUrl:'views/find/findnew.html'
        })
        .state('add',{
            url:'/add',
            controller:'addCtrl',
            templateUrl:'views/add.html'
        })
        .state('message',{
            url:'/message',
            controller:'messageCtrl',
            templateUrl:'views/message.html'
        })
        .state('message/messagefocus',{
            url:'/message/messagefocus',
            controller:'messagefocusCtrl',
            templateUrl:'views/message/messagefocus.html'
        })
});



