Ext.Loader.setConfig({
    enabled: true,
    paths: {
        'AboutUs': 'app'
    }
});
Ext.require('Ext.ux.window.Notification');
Ext.require('AboutUs.util.NotificationUtil');
Ext.require('Ext.ux.form.plugin.ValidationMessages');
Ext.application({
    name: 'AboutUs',
	
    controllers: [
        'Authentication'
    ],

    launch: function() {
        Ext.create('AboutUs.view.authentication.Register', {
           renderTo:'senchaTarget'
        });
    }
});