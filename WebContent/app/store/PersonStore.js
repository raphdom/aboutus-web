Ext.define('AboutUs.store.PersonStore', {
    extend: 'AboutUs.store.AbstractStore',
    model: 'AboutUs.model.Person',
    proxy: Ext.create('AboutUs.store.AbstractAjaxProxy'),
    
     constructor: function(config) {
     	this.callParent(arguments);
    	this.proxy.api = {
    		read : 'person/view.action',
            create : 'person/create.action',
            update: 'person/update.action',
            destroy: 'person/delete.action'
    	}
    	config = Ext.apply(config);
     	
    }
    
});