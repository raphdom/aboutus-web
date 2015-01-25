Ext.define('AboutUs.store.CloudStore', {
    extend: 'AboutUs.store.AbstractStore',
    model: 'AboutUs.model.File',
    pageSize: 1000,
    proxy: Ext.create('AboutUs.store.AbstractAjaxProxy'),
    
    constructor : function(config) {
    	this.callParent(arguments);
    	this.proxy.api = {
    		read : 'cloud/view.action',
            create : 'cloud/save.action',
            update: 'cloud/update.action',
            destroy: 'cloud/delete.action'
    	}
    	config = Ext.apply(config);
    }
});