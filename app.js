(function(){
  'use strict';


angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService',ShoppingListCheckOffService);

 ToBuyController.$inject=['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService)
{
   var ctr1= this;
   ctr1.itemlist=ShoppingListCheckOffService.gettobyItems();
   
   ctr1.removeItem=function(idx)
   {
    
        console.log(ShoppingListCheckOffService);
                 ShoppingListCheckOffService.removeItem(idx);
     
   }

}


AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
 // var showList = this;

//  showList.items = ShoppingListCheckOffService.getbroughtItems();
  
//  showList.removeItem = function (itemIndex) {
 //   ShoppingListCheckOffService.removeItem(itemIndex);
 // };
    var ctr1= this;
   ctr1.itemlist=ShoppingListCheckOffService.getbroughtItems();
   
}

var shoppingList = [
{ name: "cookies1", quantity: 1 },
{ name: "cookies2", quantity: 2 },
{ name: "cookies3", quantity: 3 },
{ name: "cookies4", quantity: 4 },
{ name: "cookies5", quantity: 5 },
{ name: "cookies6", quantity: 6 },
{ name: "cookies7", quantity: 7 }
];
var broughtList=[];

function ShoppingListCheckOffService() {
  var service = this;

  // List of shopping items



  service.getbroughtItems = function () {
    return broughtList;
  };
    service.gettobyItems = function () {
    
    return shoppingList;
  };
  service.removeItem=function(idx)
  {
      
    
      var aitem={};
      aitem.name=shoppingList[0].name;
      aitem.quantity=shoppingList[0].quantity;
      broughtList.push(aitem);
      shoppingList.splice(idx,1);
  }
}

})();