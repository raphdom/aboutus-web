Ext.define('AboutUs.view.main.Preferences', {
	extend: 'AboutUs.view.common.Dialog',
    
    alias: 'widget.dialogpreferences',
    
    title: 'Preferências',
    
    requires:['AboutUs.view.component.ThumbField'],
    
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
    			title:'Plano',
    			layout: 'form',
		        bodyPadding: 10,
		        fieldDefaults: {
		            msgTarget: 'side',
		            labelWidth: 75
		        },
		        defaultType: 'textfield',
    			items:[{
    				fieldLabel: 'Plano',
		            name: 'plan',
		            allowBlank: false
    			},{
    				fieldLabel: 'URL',
    				name:'url',
    				allowBlank:false
    			},{
    				xtype:'thumbfield',
    				fieldLabel: 'Logo'
    			}]
    		}]
        }]
    }]
    
});