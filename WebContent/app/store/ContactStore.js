Ext.define('AboutUs.store.ContactStore', {
    extend: 'Ext.data.Store',
    model: 'AboutUs.model.Contact',
    
    proxy: {
        type: 'memory'
    }
    
});