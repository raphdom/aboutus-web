Ext.define('AboutUs.controller.music.MusicController', {
    extend: 'AboutUs.controller.CommonListController',
    
    stores: ['music.MusicStore'],

    models: ['music.Music'],

    views: ['music.music.List',
    		'music.music.Dialog'],
    
    refs: [{
        ref: 'musicList',
        selector: 'musiclist'
    },{
    	ref: 'musicDialog',
    	selector: 'musicdialog'
    }],
    
    init: function() {
        this.control({
     		
        });
    },
    
    processActionMenu: function(type){
    	
    	var centerContainer = this.getController('MainController').getMainContainer().down('container[itemId=centerContainer]');
    	
    	var list = Ext.create('AboutUs.view.music.music.List');
    	centerContainer.add(list);
    	
    	centerContainer.setLoading(false);
    	
    },
    
    onBeforeSaveData: function(){
		
	},
	
	onGetDataSuccess:function(record){
		
	}
    
});