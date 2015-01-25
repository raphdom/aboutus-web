Ext.define('AboutUs.view.site.article.List', {
	extend: 'AboutUs.view.common.List',
    
    alias: 'widget.sitearticlelist',
    title : 'Artigos',
    store: 'site.ArticleStore',
    icon:'resources/images/article.png',
    dialog: 'sitearticledialog',
    controller: 'site.ArticleController',
    
    permissions:{
    	add:'ROLE_ADD_ARTICLES',
    	edit:'ROLE_EDIT_ARTICLES',
    	remove:'ROLE_DEL_ARTICLES'
    },
    
    columns: [{
    	header: "Título",
		flex:2,
		dataIndex: 'title'
    },{
    	header: "Criado",
		width: 150,
		dataIndex:'created',
		xtype:'datecolumn', 
		format:'d-m-Y H:i',
		criteriaXtype:'datefield'
    },{
    	header: "Início publicação",
		width: 150,
		dataIndex:'publishUp',
		xtype:'datecolumn', 
		format:'d-m-Y H:i',
		criteriaXtype:'datefield'
    },{
    	header: "Fim publicação",
		width: 150,
		dataIndex:'publishDown',
		xtype:'datecolumn', 
		format:'d-m-Y H:i',
		criteriaXtype:'datefield'
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
    	header: "Ordem",
		width: 80,
		dataIndex: 'ordering'
    },{
    	header: "Hits",
		width: 80,
		dataIndex: 'hits'
    },{
    	header: "Autor",
		flex:1,
		dataIndex: 'author'
    }],
    

	initComponent: function() {
		this.callParent(arguments);
	}
    
});