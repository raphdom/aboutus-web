Ext.define('AboutUs.view.person.Dialog', {
	extend: 'AboutUs.view.common.Dialog',
    
    alias: 'widget.persondialog',
    
    title: 'Nova Pessoa',
    titleUpdate: 'Detalhes da pessoa: {name}',
    
    width: 600,
    
    layout:'fit',
    
    items:[{
    	xtype:'commonform',
    	items:[{
    		xtype: 'persontabpanel'
        }]
    }]
    
});