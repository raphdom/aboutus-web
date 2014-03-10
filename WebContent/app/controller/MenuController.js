Ext.define('AboutUs.controller.MenuController', {
    extend: 'Ext.app.Controller',

    views: ['menu.MenuContainer','menu.Menu'],
    
    models:['ItemMenu'],
    
    refs: [{
        ref: 'menuContainer',
        selector: 'menuContainer'
    }],
    
    init: function() {
        this.control({
            'menuContainer > menu-list': {
                itemSelect: this.onItemSelect
            }
        });
    },
    
    menuSelected:undefined,
    
    showMenu:function(){
    	var menuContainer = Ext.create('AboutUs.view.menu.MenuContainer');
    	
    	/*menuContainer.items.each(function(item){
    		var arrayMenuItems = new Array();
    		Ext.Array.each(item.menuItems || [], function(menuItem) {
            	//arrayMenuItems.push(menuItem);
            }, this);
            item.menuItems = arrayMenuItems;
    	});*/
    	var westContainer = AboutUs.app.getController('MainController').getMainContainer().down('container[region=west]');
    	westContainer.add(menuContainer);
    },
    
    onItemSelect: function(menu, title, type, controller) {
    	if ((menu.itemId != this.menuSelected) && this.menuSelected != undefined){
    		var oldMenuSelected = this.getMenuContainer().down("menu-list[itemId="+this.menuSelected+"]");
    		oldMenuSelected.clearSelection();
    		this.menuSelected = menu.itemId;
    	}else{
    		this.menuSelected = menu.itemId;
    	}
    	
    	this.getController('CommonListController').processActionMenu();
    	
    	var controller = this.getController(controller);
    	controller.processActionMenu(type);
    	
    }
    
});