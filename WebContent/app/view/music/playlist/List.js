Ext.define('AboutUs.view.music.playlist.List', {
	extend: 'AboutUs.view.common.List',
    
    alias: 'widget.playlistlist',
    title : 'Listas de Reprodução',
    store: 'music.PlaylistStore',
    icon:'resources/images/videos.png',
    dialog: 'playlistdialog',
    controller: 'music.PlaylistController',
    
    permissions:{
    	add:'ROLE_ADD_PLAYLISTS',
    	edit:'ROLE_EDIT_PLAYLISTS',
    	remove:'ROLE_DEL_PLAYLISTS'
    },
    
    columns: [{
    	header: "Título",
		width: 170,
		flex:1,
		dataIndex: 'title'
    }],
    

	initComponent: function() {
		this.callParent(arguments);
	}
    
});