Ext.define('AboutUs.view.site.album.List', {
	extend: 'AboutUs.view.common.List',
    
    alias: 'widget.sitealbumlist',
    title : 'Albuns',
    store: 'site.AlbumStore',
    icon:'resources/images/albuns.png',
    dialog: 'sitealbumdialog',
    controller: 'site.AlbumController',
    
    permissions:{
    	add:Constants.auth_adduser,
    	edit:Constants.auth_edituser,
    	remove:Constants.auth_deleteuser
    },
    
    columns: [{
    	header: "Título",
		width: 170,
		flex:1,
		dataIndex: 'title'
   },{
    	xtype:'booleanimagecolumn', 
		header: "Publicado",
		align:'center',
		flex:1,
		dataIndex:'published',
		criteriaXtype:'combo'
    },{
    	header: "Ordem",
		width: 170,
		flex:1,
		dataIndex: 'ordering'
    },{
    	header: "Categoria",
		width: 170,
		flex:1,
		dataIndex: 'categoryName'
    }],
    

	initComponent: function() {
		this.callParent(arguments);
	}
    
});