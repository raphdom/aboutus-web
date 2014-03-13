Ext.define('AboutUs.controller.MainController', {
    extend: 'Ext.app.Controller',

    views: ['main.MainContainer'],
    
    stores: ['CurrentUserStore'],
    
    refs: [{
        ref: 'mainContainer',
        selector: 'mainContainer'
    }],
    
    init: function() {
        this.control({
            'mainContainer container[region=north] button[action=cloud]': {
                click: this.onCloudButtonClick
            },
            'mainContainer container[region=north] button[action=logout]': {
                click: this.onLogoutButtonClick
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
    }
    
});