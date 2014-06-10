Ext.define('AboutUs.view.authentication.Login', {
    extend: 'Ext.form.Panel',
    xtype: 'loginForm',
    
    url:'j_spring_security_check',
    title: 'Autenticação',
    frame:true,
    width: 400,
    bodyPadding: 10,
    icon:'resources/images/lock.png',
    
    defaultType: 'textfield',
    defaults: {
        anchor: '100%'
    },
    
    items: [
        {
            allowBlank: false,
            fieldLabel: 'Utilizador',
            name:'j_username',
            emptyText: 'Utilizador'
        },
        {
            allowBlank: false,
            fieldLabel: 'Palavra-chave',
            name:'j_password',
            emptyText: 'Palavra-chave',
            inputType: 'password'
        }
    ],
    
    buttons: [{
        	xtype: 'tbtext',
        	id: 'linkrecoverPass',
        	text: '<a href="#">Recuperar palavra-chave</a>'
        },'->',{ 
        	text:'Entrar',
        	action:'login',
        	icon:'resources/images/next.png',
        	iconAlign: 'right'
        	
	}],
	
	
	initComponent: function(){
		this.callParent(arguments);
	},
	
	afterRender: function(){
		this.callParent(arguments);
		
		this.recoverButton = this.down('#linkrecoverPass');
        
        if (this.recoverButton) {
            this.recoverButton.getEl().on('click', this.onRecoverPassClick, this);
        }
	},
	
	onRecoverPassClick:function(){
		AboutUs.app.getController('Authentication').getRecoverPassword().show();
	}
});