Ext.define('AboutUs.controller.music.PlaylistController', {
    extend: 'AboutUs.controller.CommonListController',
    
    stores: ['music.PlaylistStore'],

    models: ['music.Playlist'],

    views: ['music.playlist.List',
    		'music.playlist.Dialog'],
    
    refs: [{
        ref: 'playlistList',
        selector: 'playlistlist'
    },{
    	ref: 'playlistDialog',
    	selector: 'playlistdialog'
    }],
    
    init: function() {
        this.control({
     		
        });
    },
    
    processActionMenu: function(type){
    	
    	var centerContainer = this.getController('MainController').getMainContainer().down('container[itemId=centerContainer]');
    	
    	var list = Ext.create('AboutUs.view.music.playlist.List');
    	centerContainer.add(list);
    	
    	centerContainer.setLoading(false);
    	
    },
    
    onBeforeSaveData: function(){
		
	},
	
	onGetDataSuccess:function(record){
		
	}
    
});