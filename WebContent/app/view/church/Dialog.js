Ext.define('AboutUs.view.church.Dialog', {
    extend: 'Ext.window.Window',
    
    alias: 'widget.churchdialog',
    
    title: 'Igreja',
    
    modal: true,
    
    layout:'fit',
    
    
    
    items:[{
    
    	xtype: 'churchtabpanel'
        
    }],
    
    buttons: [{
        text: 'Save',
        action:'save'
    },{
        text: 'Cancel',
        action:'cancel'
    }]
    
});