Ext.define('AboutUs.view.main.DialogProfile', {
	extend: 'Ext.window.Window',
    
    alias: 'widget.dialogprofile',
    
    title: 'Meu perfil',
    
    requires:['AboutUs.view.component.ThumbField'],
    
    icon:'resources/images/profile.png',
    
    width: 600,
    height: 400,
    
    modal:true,
    
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
    				xtype: 'combo',
					fieldLabel: 'Idioma',
					anchor: '100%',
					displayField: 'text',
			    	valueField: 'value',
			    	name:'language',
					store: Ext.create('Ext.data.Store', {
						fields: ['text', 'value'],
						data : [
							{"text":"Português/Portugal", "value":"pt_PT"},
							{"text":"Inglês/Britânico", "value":"en_GB"}
						]
					}),
    				allowBlank:false
    			},{
    				xtype:'thumbfield',
    				fieldLabel: 'Foto',
    				name:'avatarId'
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