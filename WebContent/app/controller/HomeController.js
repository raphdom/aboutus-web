Ext.define('AboutUs.controller.HomeController', {
    extend: 'Ext.app.Controller',

    views: ['home.HomeContainer',
    		'home.ProfileContainer',
    		'home.AuditContainer',
    		'home.WhoOnlineContainer',
    		'home.DashboardContainer'],
    
    stores: ['AuditHomeStore'],
    
    models: ['Audit'],
    
    
    init: function() {
        this.control({
     		
        });
    },
    
    processActionMenu: function(type){
    	
    	var centerContainer = this.getController('MainController').getMainContainer().down('container[itemId=centerContainer]');
    	
    	var container = Ext.create('AboutUs.view.home.HomeContainer');
    	centerContainer.add(container);
    	
    	centerContainer.setLoading(false);
    	
    }
     
});