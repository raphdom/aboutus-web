Ext.define('AboutUs.store.UserStore', {
    extend: 'AboutUs.store.AbstractStore',
    model: 'AboutUs.model.User',
    proxy: Ext.create('AboutUs.store.AbstractAjaxProxy'),
    
    constructor : function(config) {
    	this.callParent(arguments);
    	this.proxy.api = {
    		read : 'user/view.action',
            create : 'user/save.action',
            update: 'user/update.action',
            destroy: 'user/delete.action'
    	}
    	config = Ext.apply(config);
    }
});