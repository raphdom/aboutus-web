Ext.define('AboutUs.controller.site.AlbumController', {
    extend: 'AboutUs.controller.CommonListController',
    
    stores: ['site.AlbumStore'],

    models: ['site.Album','site.ItemAlbum'],

    views: ['site.album.List',
    		'site.album.Dialog',
    		'site.album.AlbumItemGrid'],
    
    refs: [{
        ref: 'list',
        selector: 'sitealbumlist'
    },{
    	ref: 'dialog',
    	selector: 'sitealbumdialog',
    	autoCreate:true,
        xtype:'sitealbumdialog'
    },{
    	ref: 'itemGrid',
    	selector: 'albumitemgrid'
    }],
    
    init: function() {
        this.control({
     		
        });
    },
    
    processActionMenu: function(type){
    	
    	var centerContainer = this.getController('MainController').getMainContainer().down('container[itemId=centerContainer]');
    	
    	var list = Ext.create('AboutUs.view.site.album.List');
    	centerContainer.add(list);
    	
    	centerContainer.setLoading(false);
    	
    },
    
    onBeforeSaveData: function(){
    	
    	var form = this.getDialog().down('form');
    	
    	var items = this.getItemGrid().down('dataview').getStore().getRange();
		form.getRecord().items().add(items);
		
	},
	
	onGetDataSuccess:function(record){
		
		var me = this;
		var form = this.getDialog().down('form');
		
		this.getItemGrid().down('dataview').getStore().add(record.items().getRange());
		
	}
    
});