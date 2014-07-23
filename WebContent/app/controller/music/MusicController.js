Ext.define('AboutUs.controller.music.MusicController', {
    extend: 'AboutUs.controller.CommonListController',
    
    stores: ['music.MusicStore'],

    models: ['music.Music'],

    views: ['music.music.List',
    		'music.music.Dialog',
    		'music.music.SlideWindow'],
    
    refs: [{
        ref: 'list',
        selector: 'musiclist'
    },{
    	ref: 'dialog',
    	selector: 'musicdialog',
    	autoCreate:true,
        xtype:'musicdialog'
    },{
    	ref: 'slideWindow',
    	selector: 'slidewindow',
    	autoCreate:true,
        xtype:'slidewindow'
    }],
    
    init: function() {
        this.control({
        	'musiclist': {
				slideMusic: this.onSlideMusic
			},
			'slidewindow button[action=play]':{
				click: this.onPlaySlide
			},
			'slidewindow dataview':{
				itemclick : this.slideWindowItemClick
			}
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
		
	},
	
	onSlideMusic: function(actionCol, record){
		var dialog = this.getSlideWindow();
		dialog.down('dataview').getStore().loadData([{
        	phrase:'SLIDE 1 LINE LINE'
        },{
        	phrase:'SLIDE 2 LINE LINE <br/> LINE2 LINE2 LINE2'
        },{
        	phrase:'SLIDE 3 LINE LINE <br/> LINE2 LINE2 LINE2 <br/> LINE3 LINE3 LINE3'
        },{
        	phrase:'SLIDE 1 LINE LINE'
        },{
        	phrase:'SLIDE 2 LINE LINE <br/> LINE2 LINE2 LINE2'
        },{
        	phrase:'SLIDE 3 LINE LINE <br/> LINE2 LINE2 LINE2 <br/> LINE3 LINE3 LINE3'
        },{
        	phrase:'SLIDE 1 LINE LINE'
        },{
        	phrase:'SLIDE 2 LINE LINE <br/> LINE2 LINE2 LINE2'
        },{
        	phrase:'SLIDE 3 LINE LINE <br/> LINE2 LINE2 LINE2 <br/> LINE3 LINE3 LINE3'
        }]);
		dialog.show();
	},
	
	onPlaySlide: function(button){
		this.slideWin = window.open("slideWindow.html", "slideWin", "fullscreen=yes, titlebar=no, status=no, menubar=no, toolbar=no, scrollbars=no, location=no, resizable=yes, top=500, left=500, width=400, height=400");
	},
	
	onPlaySlideFirst: function(){
		var view = this.getSlideWindow().down('dataview'); 
		if (view.getSelectionModel().getSelection().length == 0 ){
			view.getSelectionModel().select(0);
		}
		this.slideWin.onSlideClick(view.getSelectedNodes()[0]);
	},
	
	slideWindowItemClick: function(view, record, item, index, e, eOpts){
		this.slideWin.onSlideClick(item);
	}
    
});