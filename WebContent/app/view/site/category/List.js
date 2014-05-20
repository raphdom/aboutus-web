Ext.define('AboutUs.view.site.category.List', {
	extend: 'AboutUs.view.common.List',
    
    alias: 'widget.sitecategorylist',
    title : 'Categorias',
    store: 'site.CategoryStore',
    icon:'resources/images/categories.png',
    dialog: 'sitecategorydialog',
    controller: 'site.CategoryController',
    
    permissions:{
    	add:Constants.auth_adduser,
    	edit:Constants.auth_edituser,
    	remove:Constants.auth_deleteuser
    },
    
    columns: [{
    	xtype: 'treecolumn',
    	header: "Nome",
		width: 170,
		flex:1,
		dataIndex: 'text'
    },{
    	header: "Posição",
		width: 170,
		flex:1,
		dataIndex: 'position'
	},{
		xtype:'booleanimagecolumn',
		align:'center',
		header: "Publicado Fotos",
		flex:1,
		dataIndex:'publishedAlbuns',
		criteriaXtype:'combo'
	},{
		xtype:'booleanimagecolumn',
		align:'center',
		header: "Publicado Vídeos",
		flex:1,
		dataIndex:'publishedVideos',
		criteriaXtype:'combo'
    }],
    
    tree : true,
	
	initComponent: function() {
		this.callParent(arguments);
	}
    
});