Ext.define('AboutUs.controller.site.BannerController', {
    extend: 'AboutUs.controller.CommonListController',
    
    stores: ['site.BannerStore'],

    models: ['site.Banner'],

    views: ['site.banner.List',
    		'site.banner.Dialog'],
    
    refs: [{
        ref: 'list',
        selector: 'sitebannerlist'
    },{
    	ref: 'dialog',
    	selector: 'sitebannerdialog',
    	autoCreate:true,
        xtype:'sitebannerdialog'
    }],
    
    init: function() {
        this.control({
     		
        });
    },
    
    processActionMenu: function(type){
    	
    	var centerContainer = this.getController('MainController').getMainContainer().down('container[itemId=centerContainer]');
    	
    	var list = Ext.create('AboutUs.view.site.banner.List');
    	centerContainer.add(list);
    	
    	centerContainer.setLoading(false);
    	
    },
    
    onBeforeSaveData: function(){
		
	},
	
	onGetDataSuccess:function(record){
		
	}
    
});