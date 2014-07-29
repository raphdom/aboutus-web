Ext.define('AboutUs.controller.music.PlaylistController', {
    extend: 'AboutUs.controller.CommonListController',
    
    stores: ['music.PlaylistStore','music.MusicStore'],

    models: ['music.Playlist','music.Music'],

    views: ['music.playlist.List',
    		'music.playlist.Dialog',
    		'music.playlist.MusicList',
    		'music.music.SlideWindow'],
    
    refs: [{
        ref: 'list',
        selector: 'playlistlist'
    },{
    	ref: 'dialog',
    	selector: 'playlistdialog',
    	autoCreate:true,
        xtype:'playlistdialog'
    },{
    	ref:'musicGrid',
    	selector: 'musicgrid'
	},{
    	ref: 'slideWindow',
    	selector: 'slidewindow',
    	autoCreate:true,
        xtype:'slidewindow'
    }],
    
    init: function() {
        this.control({
     		'playlistdialog commonform button[action=slide]': {
				click: this.onSlideMusic
			},
			'slidewindow button[action=play]':{
				click: this.onPlaySlide
			},
			'slidewindow dataview':{
				itemclick : this.slideWindowItemClick
			},
			'playlistdialog': {
				afterlayout: this.onDialogAfterDialog
			}
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
	
	onDialogAfterDialog:function(dialog){
		var me = this;
		var form = this.getDialog().down('form');
		
		this.getMusicGrid().getStore().removeAll();
		
		if(form.getRecord()){
			this.getMusicGrid().getStore().add(form.getRecord().musics().getRange());
		}
		
	},
	
	onSlideMusic: function(button){
		var dialog = this.getSlideWindow();
		
		Ext.Array.each(this.getMusicGrid().getStore().getRange(), function(music, index) {
			dialog.addMusic(music.get('title'),music.get('liryc'));	
		});
		
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