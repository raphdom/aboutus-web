Ext.define('AboutUs.controller.MainController', {
    extend: 'Ext.app.Controller',

    views: ['main.MainContainer'],
    
    stores: ['CurrentUserStore'],
    
     models: ['GenericValueText','GenericIdText'],
    
    refs: [{
        ref: 'mainContainer',
        selector: 'mainContainer'
    },{
    	 ref: 'buttonCloudDialog',
         selector: 'mainContainer button[action=cloudDialog]'
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
    }
    
});