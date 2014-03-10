Ext.define('AboutUs.view.church.List', {
	extend: 'AboutUs.view.common.List',
    
    alias: 'widget.churchlist',
    
    title : 'Igrejas',
    
    store: 'ChurchStore',
    
    icon:'resources/images/church.png',
    
    dialog: 'AboutUs.view.church.Dialog',
    
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