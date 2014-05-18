Ext.define('AboutUs.controller.site.CategoryController', {
    extend: 'AboutUs.controller.CommonListController',
    
    stores: ['site.CategoryStore','site.CategoryComboStore'],

    models: ['site.Category'],

    views: ['site.category.List',
    		'site.category.Dialog'],
    
    refs: [],
    
    init: function() {
        this.control({
     		
        });
    },
    
    processActionMenu: function(type){
    	
    	var centerContainer = this.getController('MainController').getMainContainer().down('container[itemId=centerContainer]');
    	
    	var list = Ext.create('AboutUs.view.site.category.List');
    	centerContainer.add(list);
    	
    	centerContainer.setLoading(false);
    	
    },
    
    onBeforeSaveData: function(){
		
	},
	
	onGetDataSuccess:function(record){
		
	}
    
});