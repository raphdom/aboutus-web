Ext.define('AboutUs.view.cloud.ImagePicker', {
	extend: 'Ext.window.Window',
	alias: 'widget.imagepicker',
	
	width: 800,
	height: 400,
	
	title: 'Escolha uma imagem',
	
	layout: 'fit',
	
    items: [{
    	xtype:'cloudcontainer'
    }],
    
    buttons: [
  		{ 
  			text: 'Aceitar',
  			action: 'accept'
  		},{
  			text: 'Desistir',
  			action: 'cancel'
  		}
	],

    initComponent: function() {
    	var me = this;
        Ext.apply(me, {
        })
        this.addEvents('recordSelected');
    	this.callParent(arguments);
    }
    
});