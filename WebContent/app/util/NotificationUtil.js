Ext.define('AboutUs.util.NotificationUtil', {
    
    singleton: true,
    
    processMessages: function(messages){
    	var me = this;
    	Ext.Array.forEach(messages,function(item, index){
    		if (item.type == 1){
    			me.showNotificationError(item.message);
    		}
    	});
    },
    
    showNotificationInfo: function(message) {
    	Ext.create('widget.uxNotification', {
				title: '',
				position: 't',
				slideInDuration:100,
				slideBackDuration: 100,
				closable: false,
				resizable:false,
				shadow:true,
				icon:'resources/images/info.png',
				title:'Informação',
				manager: 'demo1',
				autoCloseDelay: 5000,
				spacing: 20,
				cls:'ux-notification-window-info',
				html: message
		}).show();
    },
    
    showNotificationWarning: function(message) {
    	Ext.create('widget.uxNotification', {
				title: '',
				position: 't',
				slideInDuration:100,
				slideBackDuration: 100,
				closable: false,
				resizable:false,
				shadow:true,
				icon:'resources/images/warning.png',
				title:'Alerta!',
				manager: 'demo1',
				autoCloseDelay: 7000,
				spacing: 20,
				cls:'ux-notification-window-warning',
				html: message
		}).show();
    },
    
    showNotificationError: function(message) {
    	Ext.create('widget.uxNotification', {
				position: 't',
				slideInDuration:100,
				slideBackDuration: 100,
				closable: true,
				resizable:false,
				shadow:true,
				icon:'resources/images/error.png',
				title:'Erro!',
				manager: 'demo1',
				autoCloseDelay: 100000,
				spacing: 20,
				cls:'ux-notification-window-error',
				html: message
		}).show();
    }
    
});