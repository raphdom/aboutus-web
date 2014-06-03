Ext.define('AboutUs.controller.site.VideoController', {
    extend: 'AboutUs.controller.CommonListController',
    
    stores: ['site.VideoStore'],

    models: ['site.Video'],

    views: ['site.video.List',
    		'site.video.Dialog'],
    
    refs: [{
        ref: 'videoList',
        selector: 'sitevideolist'
    },{
    	ref: 'videoDialog',
    	selector: 'sitevideodialog'
    }],
    
    init: function() {
        this.control({
     		
        });
    },
    
    processActionMenu: function(type){
    	
    	var centerContainer = this.getController('MainController').getMainContainer().down('container[itemId=centerContainer]');
    	
    	var list = Ext.create('AboutUs.view.site.video.List');
    	centerContainer.add(list);
    	
    	centerContainer.setLoading(false);
    	
    },
    
    onBeforeSaveData: function(){
		
	},
	
	onGetDataSuccess:function(record){
		
	}
    
});