Ext.define('AboutUs.view.site.category.List', {
	extend: 'AboutUs.view.common.List',
    
    alias: 'widget.sitecategorylist',
    title : 'Categorias',
    store: 'site.CategoryStore',
    icon:'resources/images/categories.png',
    dialog: 'sitecategorydialog',
    controller: 'site.CategoryController',
    
    permissions:{
    	add:'ROLE_ADD_CATEG',
    	edit:'ROLE_EDIT_CATEG',
    	remove:'ROLE_DEL_CATEG'
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