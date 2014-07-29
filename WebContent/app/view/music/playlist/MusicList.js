Ext.define('AboutUs.view.music.playlist.MusicList', {
	extend: 'Ext.grid.Panel',
    
    alias: 'widget.musicgrid',
    store: 'music.MusicStore',
    
    layout:'fit',
    
    columns: [
    {
    	header: "Música",
		width: 170,
		flex:1,
		dataIndex: 'title'
	}],
	
	initComponent: function() {
		this.callParent(arguments);
	}
    
});