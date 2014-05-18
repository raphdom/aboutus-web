Ext.define('AboutUs.view.site.category.List', {
	/*extend: 'AboutUs.view.common.List',
    
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
		dataIndex: 'name'
    }],*/
	
	extend: 'Ext.tree.Panel',
	title: 'Core Team Projects',
    useArrows: true,
    rootVisible: false,
    multiSelect: true,
    singleExpand: true,
	
	initComponent: function() {
		
		Ext.apply(this, {
			store: 'site.CategoryStore',
			columns: [{
		    	xtype: 'treecolumn',
		    	header: "Nome",
				width: 170,
				flex:1,
				dataIndex: 'text'
		    }]
		})
		
		this.callParent(arguments);
	}
    
});