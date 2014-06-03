Ext.define('AboutUs.view.site.video.List', {
	extend: 'AboutUs.view.common.List',
    
    alias: 'widget.sitevideolist',
    title : 'Videos',
    store: 'site.VideoStore',
    icon:'resources/images/videos.png',
    dialog: 'sitevideodialog',
    controller: 'site.VideoController',
    
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
    	header: "URL",
		width: 170,
		flex:1,
		dataIndex: 'url'
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