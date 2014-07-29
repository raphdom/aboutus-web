Ext.define('AboutUs.view.music.music.List', {
	extend: 'AboutUs.view.common.List',
    
    alias: 'widget.musiclist',
    title : 'Músicas',
    store: 'music.MusicStore',
    icon:'resources/images/music.png',
    dialog: 'musicdialog',
    controller: 'music.MusicController',
    
    permissions:{
    	add:'ROLE_ADD_MUSICS',
    	edit:'ROLE_EDIT_MUSICS',
    	remove:'ROLE_DEL_MUSICS'
    },
    
    columns: [/*{
	            xtype:'actioncolumn',
	            width:30,
	            hideable:false,
	            menuDisabled:true,
	            resizable:false,
	            items: [{
	                icon: 'resources/images/projection.png',
	                tooltip: 'Slider',
	                handler: function(grid, rowIndex, colIndex) {
	                    var rec = grid.getStore().getAt(rowIndex);
	                    if(rec){
	    					grid.up('musiclist').fireEvent('slideMusic', this, rec);
	    				}
	                }
            	}]
	},*/{
    	header: "Id",
		width: 170,
		flex:1,
		dataIndex: 'id'
    },{
    	header: "Título",
		width: 170,
		flex:1,
		dataIndex: 'title'
    },{
    	header: "Autor",
		width: 170,
		flex:1,
		dataIndex: 'author'
    },{
    	header: "Letra",
		width: 170,
		flex:1,
		dataIndex: 'liryc'
    }],
    

	initComponent: function() {
		this.callParent(arguments);
	}
    
});