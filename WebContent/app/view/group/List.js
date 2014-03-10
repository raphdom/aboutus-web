Ext.define('AboutUs.view.group.List', {
	extend: 'AboutUs.view.common.List',
	
    alias: 'widget.grouplist',
    title : 'Grupos',
    store: 'GroupStore',
    icon:'resources/images/group.png',
    dialog: 'groupdialog',
    controller: 'GroupController',
    permissions:{
    	add:Constants.auth_addgroup,
    	edit:Constants.auth_editgroup,
    	remove:Constants.auth_deletegroup
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