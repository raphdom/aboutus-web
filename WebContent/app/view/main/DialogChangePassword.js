Ext.define('AboutUs.view.main.DialogChangePassword', {
	extend: 'Ext.window.Window',
    
    alias: 'widget.dialogchangepass',
    
    title: 'Alterar Palavra-passe',
    
    icon:'resources/images/lock.png',
    
    width: 500,
    height: 200,
    
    modal:true,
    resizable:false,
    
    layout:'fit',
    
    items:[{
    	xtype:'commonform',
    	items:[{
    			layout: 'form',
		        bodyPadding: 10,
		        fieldDefaults: {
		            msgTarget: 'side',
		            labelWidth: 180
		        },
		        defaultType: 'textfield',
    			items:[{
    				fieldLabel: 'Palavra-passe atual',
		            name: 'passActual',
		            allowBlank: false,
		            inputType: 'password',
		            labelWidth: 180
    			},{
    				fieldLabel: 'Palavra-passe nova',
		            name: 'passNew',
		            allowBlank: false,
		            inputType: 'password',
		            labelWidth: 180
    			},{
    				fieldLabel: 'Redigitar palavra-passe nova',
		            name: 'passNewRe',
		            allowBlank: false,
		            inputType: 'password',
		            labelWidth: 180,
		            validator: function(value) {
		                var password1 = this.previousSibling('[name=passNew]');
		                return (value === password1.getValue()) ? true : 'Palavra-chave não corresponde.'
		            }
		    }]
        }]
    }]
    
});