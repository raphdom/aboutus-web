Ext.define('AboutUs.controller.MainController', {
    extend: 'Ext.app.Controller',

    views: ['main.MainContainer',
    		'main.DialogProfile',
    		'main.Preferences',
    		'main.DialogPlans',
    		'main.DialogChangePassword'],
    
    stores: ['CurrentUserStore'],
    
     models: ['GenericValueText','GenericIdText'],
    
    refs: [{
        ref: 'mainContainer',
        selector: 'mainContainer'
    },{
    	 ref: 'buttonCloudDialog',
         selector: 'mainContainer button[action=cloudDialog]'
    },{
    	ref: 'dialogProfile',
    	selector:'dialogprofile',
    	autoCreate:true,
        xtype:'dialogprofile'
    },{
    	ref: 'dialogPreferences',
    	selector:'dialogpreferences',
    	autoCreate:true,
        xtype:'dialogpreferences'
    },{
    	ref: 'dialogPlans',
    	selector:'dialogplans',
    	autoCreate:true,
        xtype:'dialogplans'
    },{
    	ref: 'dialogChangePass',
    	selector:'dialogchangepass',
    	autoCreate:true,
        xtype:'dialogchangepass'
    },{
    	ref: 'userNameContainer',
    	selector:'mainContainer container[id=userNameContainer]'
    }
    
    ],
    
    init: function() {
    	Ext.tip.QuickTipManager.init();
        this.control({
            'mainContainer container[region=north] button[action=cloud]': {
                click: this.onCloudButtonClick
            },
            'mainContainer container[region=north] button[action=logout]': {
                click: this.onLogoutButtonClick
            },
            'mainContainer button[action=cloudDialog]':{
            	click: this.onCloudDialogButtonClick
            },
            'mainContainer button[action=calendar]':{
            	click: this.onCalendarButtonClick
            },
            'mainContainer container[region=north] panel container menuitem[action=myProfile]':{
            	click: this.OnMyProfileButtonClick
            },
            'mainContainer container[region=north] panel container menuitem[action=preferences]':{
            	click: this.OnPreferencesButtonClick
            },
            'mainContainer container[region=north] panel container menuitem[action=changePassword]':{
            	click: this.OnChangePasswordButtonClick
            },
            'dialogprofile button[action=cancel]':{
            	click: this.onMyProfileDialogCancel
            },
            'dialogprofile button[action=save]':{
            	click: this.onMyProfileDialogSave
            },
            'dialogchangepass button[action=save]':{
            	click: this.onChangePassDialogSave
            },
            'dialogchangepass button[action=cancel]':{
            	click: this.onChangePassDialogCancel
            }
            
            
        });
    },
    
    onCloudButtonClick: function(){
    	console.log('onCloudButtonClick');
    	this.getController('CommonListController').processActionMenu();
    	this.getController('CloudController').processActionMenu();
    },
    
    onLogoutButtonClick: function(){
    	console.log('onLogoutButtonClick');
    	window.location.href="j_spring_security_logout";
    },
    
    onCloudDialogButtonClick:function(button){
    	AboutUs.app.getController('CloudController').getCloudDialog().show(button);
    },
    
    onCalendarButtonClick: function(button){
    	console.log('onCloudButtonClick');
    	this.getController('CommonListController').processActionMenu();
    	this.getController('CalendarController').processActionMenu();
    },
    
    OnMyProfileButtonClick:function(button){
    	Ext.Ajax.request({
		    url: 'user/getProfile.action',
		    success: function(response){
		    	var jsonResp = Ext.decode(response.responseText);
		    	var userRecord = Ext.create('AboutUs.model.User',jsonResp.data.user);
		    	var personRecord = Ext.create('AboutUs.model.Person',jsonResp.data.person);
		        AboutUs.app.getController('PersonController');
    			var dialog = this.getDialogProfile();
    			var form = dialog.down('form');
    			form.loadRecord(userRecord);
    			form.loadRecord(personRecord);
    			dialog.show();
		    },
		    scope:this
		});
    },
    
    OnPreferencesButtonClick:function(button){
    	this.getDialogPreferences().show();
    },
    
    OnChangePasswordButtonClick:function(button){
    	this.getDialogChangePass().show();
    },
    
    openDialogPlans:function(message){
    	this.getDialogPlans().show();
    },
    
    onMyProfileDialogCancel: function(button, event, options) {
    	this.getDialogProfile().close();
    },
    
    onChangePassDialogCancel:function(button){
    	this.getDialogChangePass().close();
    },
    
    onChangePassDialogSave:function(button){
    	
    	var passActual = this.getDialogChangePass().down('textfield[name=passActual]').getValue();
    	var passNew = this.getDialogChangePass().down('textfield[name=passNew]').getValue();
    	
    	Ext.Ajax.request({
		    url: 'user/changePassword.action',
		    params:{passActual:passActual, passNew:passNew},
		    success: function(response){
		    	AboutUs.util.NotificationUtil.processMessages(Ext.decode(response.responseText).messages);
		    	this.getDialogChangePass().close();
		    },
		    failure: function(response){
		    	AboutUs.util.NotificationUtil.processMessages(Ext.decode(response.responseText).messages);
		    },
		    scope:this
		});
    },
    
    onMyProfileDialogSave: function(button, event, options) {
    	var writer = Ext.create('Ext.data.writer.Json');
    	var recordPerson = Ext.create('AboutUs.model.Person',this.getDialogProfile().down('form').getValues());
    	var recordUser = Ext.create('AboutUs.model.User',this.getDialogProfile().down('form').getValues());
    	recordUser.set('groups',null);
    	recordUser.set('permissions',null);
    	
    	var jsonData = {
    		user:writer.getRecordData(recordUser),
    		person:writer.getRecordData(recordPerson)
    	}
    	Ext.Ajax.request({
		    url: 'user/updateProfile.action',
		    jsonData: jsonData,
		    success: function(response){
		    	AboutUs.util.NotificationUtil.processMessages(Ext.decode(response.responseText).messages);
		    	this.getDialogProfile().close();
		    },
		    failure: function(response){
		    	this.getDialogProfile().close();
		    },
		    scope:this
		});
    }
    
    
});