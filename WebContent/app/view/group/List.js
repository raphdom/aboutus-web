Ext.define('AboutUs.view.group.List', {
	extend: 'AboutUs.view.common.List',
	
    alias: 'widget.grouplist',
    title : 'Grupos',
    store: 'GroupStore',
    icon:'resources/images/group.png',
    dialog: 'groupdialog',
    controller: 'GroupController',
    permissions:{
    	add:'ROLE_ADD_GROUPS',
    	edit:'ROLE_EDIT_GROUPS',
    	remove:'ROLE_DEL_GROUPS'
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