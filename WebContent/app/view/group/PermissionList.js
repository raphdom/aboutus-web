Ext.define('AboutUs.view.group.PermissionList', {
	extend: 'AboutUs.view.common.List',
    
    alias: 'widget.permissionlist',
    store: 'PermissionStore',
    height: 250,
    anchor: '100%',
    selType: 'checkboxmodel',
    
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