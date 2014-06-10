Ext.define('AboutUs.view.authentication.RecoverPassword', {
    extend: 'Ext.window.Window',
    xtype: 'recoverpassword',
    
    title: 'Recuperar Palavra-passe',
    icon:'resources/images/lock.png',
    width: 500,
    resizable:false,
    modal: true,
    
    items: [{
    	xtype:'form',
    	url:'recoverPassword.action',
		defaultType: 'textfield',
	    defaults: {
	        anchor: '100%'
	    },    
	    bodyPadding: 10,
	    items:[{
            allowBlank: false,
            fieldLabel: 'Email',
            name:'email',
            emptyText: 'Digite o seu email'
        }]
    }],
    
    buttons: [{
        	text:'Recuperar',
        	action:'recovery',
        	icon:'resources/images/next.png',
        	iconAlign: 'right'
        	
	}]
	
});