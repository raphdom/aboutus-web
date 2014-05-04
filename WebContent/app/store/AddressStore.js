Ext.define('AboutUs.store.AddressStore', {
    extend: 'Ext.data.Store',
    model: 'AboutUs.model.Address',
    
    proxy: {
        type: 'memory'
    }
    
});