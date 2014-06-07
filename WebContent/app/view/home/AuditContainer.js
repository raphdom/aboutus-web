Ext.define('AboutUs.view.home.AuditContainer', {
    extend: 'Ext.container.Container',
    xtype: 'auditcontainer',
    
    style:{
    	padding:'10px'
    },
    
    items:[{
    	xtype:'grid',
    	store: 'AuditStore',
    	title: 'Minhas últimas ações',
    	border:true,
    	columns: [
        	{ 
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
        	}
    	]
    }]
    
});