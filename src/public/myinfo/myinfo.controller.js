(function () {
"use strict";

angular.module('public')
.controller('MyinfoController', MyinfoController);

MyinfoController.$inject = ['MenuService','menuItems'];
function MyinfoController(MenuService, menuItems) {
  var myinfoctrl = this;
  myinfoctrl.username=MenuService.username;
  myinfoctrl.itemno=MenuService.itemno;
  myinfoctrl.phno=MenuService.phno;
  myinfoctrl.items=menuItems.menu_items;
  if((myinfoctrl.itemno>myinfoctrl.items.length)|| myinfoctrl.itemno<0){
    myinfoctrl.inonotexists=true;
  }
  myinfoctrl.menu_item_user=myinfoctrl.items[myinfoctrl.itemno];
  if(MenuService.username){
    myinfoctrl.registered=false;
  }else{
    myinfoctrl.registered=true;
  }






}})();
