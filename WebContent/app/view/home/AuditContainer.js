Ext.define('AboutUs.view.home.AuditContainer', {
    extend: 'Ext.container.Container',
    xtype: 'auditcontainer',
    
    style:{
    	padding:'10px'
    },
    
    items:[{
    	xtype:'grid',
    	store: 'AuditHomeStore',
    	title: 'Minhas últimas ações',
    	header:{
            titlePosition: 0,
            items:[{
                xtype:'button',
                text: 'Ver tudo',
                handler: function(){
                    AboutUs.app.getController('AuditController').processActionMenu();
                }
            }]    
        },
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