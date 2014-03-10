Ext.define('AboutUs.view.user.Dialog', {
    extend: 'AboutUs.view.common.Dialog',
    
    alias: 'widget.userdialog',
    
    title: 'Novo Utilizador',
    titleUpdate: 'Detalhes do utilizador: {email}',
    
    icon:'resources/images/user.png',
    
    width:500,
    height:300,
    
    layout:'fit',
    
    items:[{
    	xtype:'commonform',
    	items:[{
    		xtype: 'usertabpanel'
    	}]
    }]
    
});