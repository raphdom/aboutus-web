Ext.define('AboutUs.store.GroupStore', {
    extend: 'AboutUs.store.AbstractStore',
    model: 'AboutUs.model.Group',
    proxy: Ext.create('AboutUs.store.AbstractAjaxProxy'),
    
    constructor : function(config) {
    	this.callParent(arguments);
    	this.proxy.api = {
    		read : 'group/view.action',
            create : 'group/save.action',
            update: 'group/update.action',
            destroy: 'group/delete.action'
    	}
    	config = Ext.apply(config);
    }
});