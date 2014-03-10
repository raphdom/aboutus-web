Ext.Loader.setConfig({
    enabled: true,
    disableCaching:true,
    paths: {
        'AboutUs': 'app'
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
        'MenuController'
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
    }
});