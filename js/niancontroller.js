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
    ];
    $scope.findmore_data = [
        { "id": 1, "img" : "img/p1.png", "title" : "1111111" },
        { "id": 2, "img" : "img/p5.png", "title" : "2222222" },
        { "id": 3, "img" : "img/p5.png", "title" : "3333333" },
        { "id": 4, "img" : "img/p1.png", "title" : "4444444" },
        { "id": 5, "img" : "img/p1.png", "title" : "5555555" },
        { "id": 6, "img" : "img/p1.png", "title" : "6666666" },
        { "id": 7, "img" : "img/p1.png", "title" : "7777777" },
        { "id": 8, "img" : "img/p5.png", "title" : "8888888" },
        { "id": 9, "img" : "img/p5.png", "title" : "9999999" },
        { "id": 10, "img" : "img/p1.png", "title" : "0000000" },
        { "id": 11, "img" : "img/p1.png", "title" : "aaaaaaa" },
        { "id": 12, "img" : "img/p1.png", "title" : "bbbbbbb" },
        { "id": 13, "img" : "img/p1.png", "title" : "ccccccc" },
        { "id": 14, "img" : "img/p5.png", "title" : "ddddddd" },
        { "id": 15, "img" : "img/p5.png", "title" : "eeeeeee" },
        { "id": 16, "img" : "img/p1.png", "title" : "fffffff" },
        { "id": 17, "img" : "img/p1.png", "title" : "ggggggg" },
        { "id": 18, "img" : "img/p1.png", "title" : "hhhhhhh" }
    ];
    $scope.findnew_data = [
        { "id": 1, "img" : "img/ruiwen.jpg", "title" : "两遍啊是" },
        { "id": 2, "img" : "img/animal.jpg", "title" : "我了个去" },
        { "id": 3, "img" : "img/gailun.jpg", "title" : "你我他啊" },
        { "id": 4, "img" : "img/hanbing.jpg", "title" : "岁的法国发" },
        { "id": 5, "img" : "img/huli.jpg", "title" : "是个好方法" },
        { "id": 6, "img" : "img/ven.jpg", "title" : "阿瑟斯去是" },
        { "id": 7, "img" : "img/yasuo.jpg", "title" : "岁的尕是" },
        { "id": 8, "img" : "img/huli.jpg", "title" : "疯狂厉害" },
        { "id": 9, "img" : "img/ruiwen.jpg", "title" : "屁用官方" },
        { "id": 10, "img" : "img/ruiwen.jpg", "title" : "避难就易" },
        { "id": 11, "img" : "img/huli.jpg", "title" : "发v成功" },
        { "id": 12, "img" : "img/gailun.jpg", "title" : "归还借款" },
        { "id": 13, "img" : "img/gailun.jpg", "title" : "啊啊啊啊" },
        { "id": 14, "img" : "img/yasuo.jpg", "title" : "岁月静好" },
        { "id": 15, "img" : "img/gailun.jpg", "title" : "浮生若梦" },
        { "id": 16, "img" : "img/huli.jpg", "title" : "光阴者" },
        { "id": 17, "img" : "img/yasuo.jpg", "title" : "百代之过客" },
        { "id": 18, "img" : "img/ven.jpg", "title" : "天地者" }
    ];
    $scope.messagefocus_data = [
        { "id": 1, "img" : "img/ruiwen.jpg", "name" : "xfffff" },
        { "id": 2, "img" : "img/p1.png", "name" : "xsdsda" },
        { "id": 3, "img" : "img/ven.jpg", "name" : "蹲墙角画圈圈" },
        { "id": 4, "img" : "img/huli.jpg", "name" : "蹲墙角画圈" },
        { "id": 5, "img" : "img/gailun.jpg", "name" : "蹲墙角画" },
        { "id": 6, "img" : "img/yasuo.jpg", "name" : "蹲墙角" }
    ];
    $scope.find_data = [
        { "id": 1, "img" : "img/1.jpg", "title" : "小确幸","content":"人生太苦，你吃颗糖" ,"saygood":"123k","progress":"254"},
        { "id": 2, "img" : "img/2.jpg", "title" : "好好画画","content":"不存在的" ,"saygood":"11k","progress":"111"},
        { "id": 3, "img" : "img/3.jpg", "title" : "好好吃饭","content":"你们顶住，我去叫人" ,"saygood":"123k","progress":"2323"},
        { "id": 4, "img" : "img/4.jpg", "title" : "我的妈呀","content":"是时候跑路了" ,"saygood":"123k","progress":"345"},
        { "id": 5, "img" : "img/5.jpg", "title" : "闲来无事就画画","content":"是时候表演真正的技术了" ,"saygood":"123k","progress":"2354"},
        { "id": 6, "img" : "img/yasuo.jpg", "title" : "本场认识","content":"放弃抵抗吧" ,"saygood":"44k","progress":"41"}
    ];
    $scope.focus_data = [
        { "id": 1, "img" : "img/2.jpg", "name" : "蹲墙角画圈圈","time":"08-03 09:32" ,"type":"打卡","content":"高规格很高","good":"2"},
        { "id": 2, "img" : "img/2.jpg", "name" : "蹲墙角画圈圈","time":"08-03 09:32" ,"type":"树洞","content":"高规格很高","good":"3"},
        { "id": 3, "img" : "img/3.jpg", "name" : "蹲墙角画圈圈","time":"08-03 09:32" ,"type":"打卡","content":"高规格很高","good":"4"},
        { "id": 4, "img" : "img/4.jpg", "name" : "蹲墙角画圈圈","time":"08-03 09:32" ,"type":"日记","content":"高规格很高","good":"5"},
        { "id": 5, "img" : "img/5.jpg", "name" : "蹲墙角画圈圈","time":"08-03 09:32" ,"type":"打卡","content":"高规格很高","good":"6"},
        { "id": 6, "img" : "img/3.jpg", "name" : "蹲墙角画圈圈","time":"08-03 09:32" ,"type":"打卡","content":"高规格很高","good":"2"}
    ];
    $scope.focusactive_data = [
        { "id": 1, "img" : "img/1.jpg", "name" : "蹲墙角画圈圈","time":"08-03 09:32" ,"type":"打卡","content":"zhangsanasdhajksfd","good":"2"},
        { "id": 2, "img" : "img/1.jpg", "name" : "蹲墙角画圈圈","time":"08-03 09:32" ,"type":"创新","content":"dasdasfasfasdasd","good":"3"},
        { "id": 3, "img" : "img/1.jpg", "name" : "蹲墙角画圈圈","time":"08-03 09:32" ,"type":"剑圣","content":"高规gsgsagsg格很高","good":"4"},
        { "id": 4, "img" : "img/1.jpg", "name" : "蹲墙角画圈圈","time":"08-03 09:32" ,"type":"剑豪","content":"lalalalalalallala","good":"5"},
        { "id": 5, "img" : "img/1.jpg", "name" : "蹲墙角画圈圈","time":"08-03 09:32" ,"type":"剑魔","content":"zhangsanailisi","good":"6"},
        { "id": 6, "img" : "img/1.jpg", "name" : "蹲墙角画圈圈","time":"08-03 09:32" ,"type":"剑戟","content":"ailisimengyouxianjing","good":"2"}
    ];
})
app.controller("basicCtrl",function ($scope,$rootScope) {
    $scope.username = "蹲墙角画圈圈";
    $scope.usertime = "20:28";
    // $scope.money = 2;
    $rootScope.allofmoney = $scope.money=11;
    $scope.dog = 5;
    $scope.basiclist = $scope.basic_data;
    // $scope.daily ={"backgorund" :"../img/p1.png"}
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

});
app.controller("focusCtrl",function ($scope) {
    $scope.focuslist = $scope.focus_data;
});
app.controller("focusactiveCtrl",function ($scope) {
    $scope.focusactivelist = $scope.focusactive_data;
});
app.controller("findCtrl",function ($scope) {
    $scope.findlist = $scope.find_data;
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
    $scope.addlist = $scope.basic_data;
    $scope.show =false;
    $scope.hide = false;
    $scope.choosetext = "记本";
    $scope.toggle = function () {
        $scope.show = !$scope.show;
    };
    $scope.selectdesc = function (obj) {
        $scope.choosetext = obj;
    }
    $scope.close = function () {
        $scope.show = !$scope.show;
    }
    // $scope.myplaceholder = "进展正文";
});