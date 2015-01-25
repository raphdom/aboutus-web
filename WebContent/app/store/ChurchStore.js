Ext.define('AboutUs.store.ChurchStore', {
	extend: 'AboutUs.store.AbstractStore',
    model: 'AboutUs.model.Church',
    proxy: Ext.create('AboutUs.store.AbstractAjaxProxy'),
    
    constructor : function(config) {
    	this.callParent(arguments);
    	this.proxy.api = {
    		read : 'church/view.action',
            create : 'church/create.action',
            update: 'church/update.action',
            destroy: 'church/delete.action'
    	}
    	config = Ext.apply(config);
    }

});