Ext.define('AboutUs.view.main.DialogProfile', {
	extend: 'AboutUs.view.common.Dialog',
    
    alias: 'widget.dialogprofile',
    
    title: 'Meu perfil',
    
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
    			title:'Utilizador',
    			layout: 'form',
		        bodyPadding: 10,
		        fieldDefaults: {
		            msgTarget: 'side',
		            labelWidth: 75
		        },
		        defaultType: 'textfield',
    			items:[{
    				fieldLabel: 'Email',
		            name: 'email',
		            allowBlank: false,
		            vtype:'email'
    			},{
    				fieldLabel: 'Idioma',
    				name:'lang',
    				allowBlank:false
    			},{
    				xtype:'thumbfield',
    				fieldLabel: 'Foto'
    			}]
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