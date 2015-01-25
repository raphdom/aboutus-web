Ext.define('AboutUs.view.site.album.List', {
	extend: 'AboutUs.view.common.List',
    
    alias: 'widget.sitealbumlist',
    title : 'Albuns',
    store: 'site.AlbumStore',
    icon:'resources/images/albuns.png',
    dialog: 'sitealbumdialog',
    controller: 'site.AlbumController',
    
    permissions:{
    	add:'ROLE_ADD_ALBUNS',
    	edit:'ROLE_EDIT_ALBUNS',
    	remove:'ROLE_DEL_ALBUNS'
    },
    
    columns: [{
    	header: "Título",
		flex:2,
		dataIndex: 'title'
	},{
    	header: "Categoria",
		flex:1,
		dataIndex: 'categoryName',
		criteriaXtype:'categorycombo',
		criteriaName:'category.id',
		getSortParam: function() {
        	return this.criteriaName;
    	}
   },{
    	xtype:'booleanimagecolumn', 
		header: "Publicado",
		align:'center',
		width: 100,
		dataIndex:'published',
		criteriaXtype:'combo'
    },{
    	header: "Ordem",
		width: 100,
		dataIndex: 'ordering'
    }],
    

	initComponent: function() {
		this.callParent(arguments);
	}
    
});