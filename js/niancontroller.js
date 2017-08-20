// 新建控制器的js
//放数据的控制器
app.controller("commonCtrl",function ($scope,$http) {
    $http.get("js/data.json").success(function (response) {
        $scope.basic_data = response.basic_data;
        $scope.focus_data = response.focus_data;
        $scope.findmore_data = response.findmore_data;
        $scope.findnew_data = response.findnew_data;
        $scope.messagefocus_data = response.messagefocus_data;
        $scope.find_data = response.find_data;
        $scope.focusactive_data = response.focusactive_data;
    })
})
app.controller("basicCtrl",function ($scope,$rootScope) {
    $scope.username = "蹲墙角画圈圈";
    $scope.usertime = "20:28";
    // $scope.money = 2;
    $rootScope.allofmoney = $scope.money=11;
    $scope.dog = 5;
    // $scope.basiclist = $scope.basic_data;
});
app.controller("basiccollectCtrl",function ($scope) {

});
app.controller("basicmoneyCtrl",function ($scope) {

});
app.controller("basicsettingCtrl",function ($scope) {

});
// app.controller("basicselectCtrl",function ($scope) {
//
// });
app.controller("basicdailyCtrl",function ($scope,$stateParams) {
    // $scope.basiclist = $scope.basic_data;
    for(var i=0;i<$scope.basiclist.length;i++)
    {
        if ($scope.basic_data[i].id == $stateParams.id){
            $scope.daily = $scope.basic_data[i];
            break;
        }
    }

})
app.controller("focusCtrl",function ($scope) {

});
app.controller("focusCtrl",function ($scope) {
    $scope.focuslist = $scope.focus_data;
});
app.controller("focusactiveCtrl",function ($scope) {
    $scope.focusactivelist = $scope.focusactive_data;
});
app.controller("findCtrl",function ($scope) {
    // $scope.findlist = $scope.find_data;
});
app.controller("findmoreCtrl",function ($scope) {
    $scope.findmorelist = $scope.findmore_data;
});
app.controller("findnewCtrl",function ($scope) {
    $scope.findnewlist = $scope.findnew_data;
});
app.controller("messageCtrl",function ($scope) {

});
app.controller("messagefocusCtrl",function ($scope) {
    $scope.messagefocuslist = $scope.messagefocus_data;
});
app.controller("addCtrl",function ($scope) {
    // $scope.addlist = $scope.basic_data;
    $scope.show =false;
    // $scope.hide = false;
    $scope.myimages = "img/p1.png";
    $scope.choosetext = "记本";
    $scope.toggle = function () {
        $scope.show = !$scope.show;
    };
    $scope.selectdesc = function (obj1,obj2) {
        $scope.choosetext = obj1;
        $scope.myimages = obj2;
    }
    $scope.close = function () {
        $scope.show = !$scope.show;
    }
});