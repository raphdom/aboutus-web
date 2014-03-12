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
        },
        {
        	xtype: 'component',
            autoEl: {
                tag: 'a',
                href: 'http://www.example.com/',
                html: 'Recuperar palavra-chave'
            }
        }
    ],
    
    buttons: [{ 
        	text:'Entrar',
        	action:'login',
        	icon:'resources/images/next.png',
        	iconAlign: 'right'
        	
	}]
});