Ext.Loader.setConfig({
    enabled: true,
    disableCaching:true,
    paths: {
        'AboutUs': 'app',
        "Extensible": "ext4.2.1/src/calendar"
    }
});
Ext.require('AboutUs.AssociatedWriter');
Ext.require('Ext.ux.window.Notification');
Ext.require('Ext.ux.grid.column.BooleanImageColumn');
Ext.require('AboutUs.util.NotificationUtil');
Ext.require('AboutUs.util.UserManager');

Ext.tip.QuickTipManager.init();
Ext.application({
    name: 'AboutUs',
	
    controllers: [
    	'UserController',
    	'GroupController',
    	'CommonListController',
        'MainController',
        'MenuController',
        'HomeController'
    ],

    launch: function() {
    	Ext.create('Ext.container.Viewport', {
            layout: 'fit',
            items: [
                {
                    xtype: 'mainContainer'
                }
            ]
        });	
        //Keep Alive
        Ext.TaskManager.start({
	        run: function(){
	                   Ext.Ajax.request({
	                         url: 'keepAlive.action',
	                         success: function(response){
	                         }
	                 });
	        },
	        //interval: 30000 //30 segundos
	        interval: 300000 //5minutos = 300000ms
		}); 
    }
});