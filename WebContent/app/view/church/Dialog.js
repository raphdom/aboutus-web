Ext.define('AboutUs.view.church.Dialog', {
    extend: 'AboutUs.view.common.Dialog',
    
    alias: 'widget.churchdialog',
    
    title: 'Igreja',
    
    title: 'Nova Igreja',
    titleUpdate: 'Detalhes da igreja: {name}',
    
    width:600,
    height:400,
    
    layout:'fit',
    
    items:[{
    	xtype:'commonform',
    	items:[{
    		xtype: 'churchtabpanel'
    	}]
    }]
    
});