APP.controller('ctlIndex', function() {
    var ctrl = this;

    ctrl.itemCnt = 100;
    ctrl.currentPage = 1;
    ctrl.itemCntEachPage = 10;

    ctrl.onChange = function() {
        console.log(ctrl.currentPage); 
    };
});


