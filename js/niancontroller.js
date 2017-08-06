// 新建控制器的js
//放数据的控制器
app.controller("commonCtrl",function ($scope) {
    $scope.basic_data = [
        { "id": 1, "img" : "img/p1.png", "description" : "日常" },
        { "id": 2, "img" : "img/p1.png", "description" : "相册" },
        { "id": 3, "img" : "img/p5.png", "description" : "习惯" },
        { "id": 4, "img" : "img/p1.png", "description" : "自拍" },
        { "id": 5, "img" : "img/p1.png", "description" : "打卡" },
        { "id": 6, "img" : "img/p1.png", "description" : "树洞" }
    ]
})
app.controller("basicCtrl",function ($scope) {
    $scope.username = "蹲墙角画圈圈";
    $scope.usertime = "20:28";
    $scope.money = 2;
    $scope.dog = 5;
    $scope.basiclist = $scope.basic_data;
    // $scope.daily ={"backgorund" :"../img/p1.png"}
});
// app.controller("basicdailyCtrl",function ($scope,$stateParams) {
//     $scope.basiclist = $scope.basic_data;
//     // for(var i=0;i<$scope.basiclist.length;i++)
//     // {
//     //     if ($scope.basiclist[i].id == $stateParams.id){
//     //         $scope.daily = $scope.basiclist[i];
//     //     }
//     // }
//
// })
app.controller("focusCtrl",function ($scope) {

})
app.controller("findCtrl",function ($scope) {

})
app.controller("findmoreCtrl",function ($scope) {

})