Ext.define('AboutUs.view.site.article.List', {
	extend: 'AboutUs.view.common.List',
    
    alias: 'widget.sitearticlelist',
    title : 'Artigos',
    store: 'site.ArticleStore',
    icon:'resources/images/article.png',
    dialog: 'sitearticledialog',
    controller: 'site.ArticleController',
    
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
    	header: "Criado",
		width: 150,
		flex:1,
		dataIndex:'created',
		xtype:'datecolumn', 
		format:'d-m-Y H:i',
		criteriaXtype:'datefield'
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
    },{
    	header: "Hits",
		width: 170,
		flex:1,
		dataIndex: 'hits'
    },{
    	header: "Autor",
		width: 170,
		flex:1,
		dataIndex: 'author'
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