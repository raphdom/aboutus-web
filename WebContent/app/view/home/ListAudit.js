Ext.define('AboutUs.view.home.ListAudit', {
	extend: 'AboutUs.view.common.List',
    
    alias: 'widget.auditlist',
    title : 'Auditoria',
    store: 'AuditStore',
    icon:'resources/images/user.png',
    controller: 'AuditController',
    columns: [{ 
        		text: 'Action',  
        		dataIndex: 'action',
        		flex:1
        	},{ 
        		text: "Data",
				width:200,
				dataIndex:'actionDate',
				xtype:'datecolumn', 
				format:'d-m-Y H:i',
				criteriaXtype:'datefield'
        	}],
	
	initComponent: function() {
		this.callParent(arguments);
	}
    
});