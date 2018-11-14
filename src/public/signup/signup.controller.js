(function () {
"use strict";

angular.module('public')
.controller('SignupController', SignupController);

SignupController.$inject = ['MenuService'];
function SignupController(MenuService) {
  var signupctrl = this;

  signupctrl.setService=function(){

    MenuService.username=signupctrl.username;
    MenuService.itemno=signupctrl.itemno;
    MenuService.phno=signupctrl.phno;
    

  }




}


})();
