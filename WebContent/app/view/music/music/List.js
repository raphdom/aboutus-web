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
    
    columns: [{
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