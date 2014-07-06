Ext.define('AboutUs.view.church.List', {
	extend: 'AboutUs.view.common.List',
    
    alias: 'widget.churchlist',
    title : 'Igrejas',
    store: 'ChurchStore',
    icon:'resources/images/church.png',
    dialog: 'churchdialog',
    controller: 'ChurchController',
    permissions:{
    	add:'ROLE_ADD_CHURCHES',
    	edit:'ROLE_EDIT_CHURCHES',
    	remove:'ROLE_DEL_CHURCHES'
    },
    
    columns: [
    {
    	header: "Nome",
		width: 170,
		flex:1,
		dataIndex: 'name'
	}],
	
	initComponent: function() {
		this.callParent(arguments);
	}
    
});