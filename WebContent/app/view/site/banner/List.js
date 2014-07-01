Ext.define('AboutUs.view.site.banner.List', {
	extend: 'AboutUs.view.common.List',
    
    alias: 'widget.sitebannerlist',
    title : 'Banners',
    store: 'site.BannerStore',
    icon:'resources/images/banners.png',
    dialog: 'sitebannerdialog',
    controller: 'site.BannerController',
    
    permissions:{
    	add:'ROLE_ADD_BANNERS',
    	edit:'ROLE_EDIT_BANNERS',
    	remove:'ROLE_DEL_BANNERS'
    },
    
    columns: [{
    	header: "Nome",
		width: 170,
		flex:1,
		dataIndex: 'name'
    },{
    	header: "Alias",
		width: 170,
		flex:1,
		dataIndex: 'alias'
    },{
    	header: "Link",
		width: 170,
		flex:1,
		dataIndex: 'link'
    },{
    	header: "Início publicação",
		width: 150,
		flex:1,
		dataIndex:'publishUp',
		xtype:'datecolumn', 
		format:'d-m-Y H:i',
		criteriaXtype:'datefield'
    },{
    	header: "Fim publicação",
		width: 150,
		flex:1,
		dataIndex:'publishDown',
		xtype:'datecolumn', 
		format:'d-m-Y H:i',
		criteriaXtype:'datefield'
    },{
    	header: "Ordem",
		width: 170,
		flex:1,
		dataIndex: 'ordering'
    }],
    

	initComponent: function() {
		this.callParent(arguments);
	}
    
});