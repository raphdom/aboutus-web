Ext.define('AboutUs.controller.MainController', {
    extend: 'Ext.app.Controller',

    views: ['main.MainContainer',
    		'main.DialogProfile',
    		'main.Preferences',
    		'main.DialogPlans'],
    
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
    }
    
    ],
    
    init: function() {
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
    	AboutUs.app.getController('PersonController');
    	this.getDialogProfile().show();
    },
    
    OnPreferencesButtonClick:function(button){
    	this.getDialogPreferences().show();
    },
    
    openDialogPlans:function(message){
    	this.getDialogPlans().show();
    }
    
    
});