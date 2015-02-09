Ext.define('AboutUs.store.AuditStore', {
    extend: 'AboutUs.store.AbstractStore',
    model: 'AboutUs.model.Audit',
    proxy: Ext.create('AboutUs.store.AbstractAjaxProxy'),
    
    constructor : function(config) {
    	this.callParent(arguments);
    	this.proxy.api = {
    		read : 'audit/view.action'
    	}
    	config = Ext.apply(config);
    }
});