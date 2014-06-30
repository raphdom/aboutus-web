Ext.define('AboutUs.controller.Authentication', {
    extend: 'Ext.app.Controller',

    views: ['authentication.Login',
    		'authentication.RecoverPassword'
    		/*'authentication.Register',
    		'authentication.TermsOfUseDialog',
    		'authentication.RegisterWindow'*/],
    
    stores: [],
    
    refs: [{
        ref: 'loginForm',
        selector: 'loginForm'
    },{
     	ref: 'recoverPassword',
        selector: 'recoverpassword',
        autoCreate:true,
        xtype:'recoverpassword'
    },{
    	ref: 'registerForm',
        selector: 'registerForm'
    },{
    	ref: 'termsWindow',
        selector: 'termswindow'
    },{
    	ref: 'registerWindow',
        selector: 'registerwindow'
    }],
    
    init: function() {
        this.control({
			'loginForm button[action=login]': {
         		click: this.onLogin
     		},
     		'loginForm textfield[name=j_username]': {
         		afterrender: this.onEmailAfterRender
     		},
     		'loginForm textfield': {
         		specialkey: this.submitOnEnter
     		},
     		'recoverpassword button[action=recovery]': {
     			click: this.onRecoverPassword
     		},
     		'registerForm textfield[name=churchName]': {
         		afterrender: this.onEmailAfterRender
     		},
     		'registerForm button[action=register]': {
         		click: this.onRegister
     		},
     		'registerForm textfield[name=siteAlias]': {
         		keyup: this.onSiteAliasKeyUp
     		},
     		'termswindow button[action=decline]':{
     			click: this.onDeclineTerms
     		},
     		'termswindow button[action=accept]':{
     			click: this.onAcceptTerms
     		}
        });
    },
    
    onLogin: function(button){
    	if (this.getLoginForm().isValid()){
	    	this.getLoginForm().getForm().submit({
	    		scope:this,
	        	success: function(form, action) {
	        		window.location.href = "";
	            },
	            failure: function(form, action) {
	            	this.getLoginForm().down('textfield[name=j_password]').setValue("");
	            	this.getLoginForm().down('textfield[name=j_password]').focus(false,1000);
	            	AboutUs.util.NotificationUtil.processMessages(action.result.messages);
	            }
	        });
    	}else{
    		AboutUs.util.NotificationUtil.showNotificationError("Preencha os campos obrigatórios!");
    	}
    },
    
    onEmailAfterRender: function(field){
    	field.focus(false, 500);
    },
    
    submitOnEnter: function(field, event) {
		if (event.getKey() == event.ENTER) {
			this.onLogin();
		}
	},
	
	onRegister:function(button){
		if (this.getRegisterForm().isValid()){
	    	this.getRegisterForm().getForm().submit({
	    		scope:this,
	        	success: function(form, action) {
	        		this.getRegisterForm().hide();
					Ext.create('AboutUs.view.authentication.RegisterWindow').show();
	            },
	            failure: function(form, action) {
	            	AboutUs.util.NotificationUtil.processMessages(action.result.messages);
	            }
	        });
    	}else{
    		AboutUs.util.NotificationUtil.showNotificationError("Preencha todos os campos obrigatórios!");
    	}
	},
	
	onDeclineTerms:function(button){
		this.getTermsWindow().close();
        this.getRegisterForm().down('[name=acceptTerms]').setValue(false);
	},
	
	onAcceptTerms: function(button){
		this.getTermsWindow().close();
        this.getRegisterForm().down('[name=acceptTerms]').setValue(true);
	},
	
	onSiteAliasKeyUp:function(textfield, e, eOpts){
		if (textfield.getValue()!=""){
			this.getRegisterForm().down('[id=aliasNameEx]').setValue(textfield.getValue() + "/");
		}else{
			this.getRegisterForm().down('[id=aliasNameEx]').setValue("");
		}
	},
	
	onRecoverPassword:function(button){
		this.getRecoverPassword().down('form').submit({
    		scope:this,
        	success: function(form, action) {
        		AboutUs.util.NotificationUtil.processMessages(action.result.messages);
        		this.getRecoverPassword().hide();
            },
            failure: function(form, action) {
            	AboutUs.util.NotificationUtil.processMessages(action.result.messages);
            }
        });
	}
    
});