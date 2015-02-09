Ext.define('AboutUs.view.home.ListAudit', {
	extend: 'AboutUs.view.common.List',
    
    alias: 'widget.auditlist',
    title : 'Auditoria',
    store: 'AuditStore',
    icon:'resources/images/user.png',
    controller: 'AuditController',
    columns: [{ 
        		header: "Ação",
				flex:1,
				dataIndex: 'action',
				hideCriteria:true
        	},{ 
        		header: "Data",
				width:200,
				dataIndex:'actionDate',
				xtype:'datecolumn', 
				format:'d-m-Y H:i',
				criteriaXtype:'daterangecriterion'
        	}],
	
	initComponent: function() {
		this.callParent(arguments);
	}
    
});