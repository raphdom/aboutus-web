Ext.define('AboutUs.view.main.DialogProfile', {
	extend: 'AboutUs.view.common.Dialog',
    
    alias: 'widget.dialogprofile',
    
    title: 'Meu perfil',
    
    icon:'resources/images/user.png',
    
    width: 600,
    height: 400,
    
    layout:'fit',
    
    items:[{
    	xtype:'commonform',
    	items:[{
    		xtype: 'tabpanel',
    		items:[{
    			xtype:'panel',
    			title:'Utilizador'
    		},{
		    	xtype:'persontabdata'
		    },{
		    	xtype:'persontabchurchdata'
			},{
		    	xtype:'persontabaddress'
			},{
		    	xtype:'persontabcontact'
			},{
		    	xtype:'persontabobservation'
		    }]
        }]
    }]
    
});