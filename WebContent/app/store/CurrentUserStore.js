Ext.define('AboutUs.store.CurrentUserStore', {
    extend: 'Ext.data.Store',
    model: 'AboutUs.model.User',
    
    autoLoad:true,
    proxy: {
        type: 'ajax',
        api: {
        	read : 'getUserAuthenticated.action'
        },
        reader: {
            type: 'json',
            root: 'data',
            successProperty: 'success'
        }
    },
    
    listeners:{
    	load: function(store, records, successful, eOpts){
    		AboutUs.util.UserManager.setUser(records[0]);
    		AboutUs.app.getController('MenuController').showMenu();
    	}
    }
});