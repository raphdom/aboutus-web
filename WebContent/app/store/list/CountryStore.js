Ext.define('AboutUs.store.list.CountryStore', {
    extend: 'Ext.data.Store',
    autoLoad:true,
    fields: ['value','text'], 
    proxy: {
        type: 'ajax',
        api: {
        	read : 'list/country.action'
        },
        reader: {
            type: 'json',
            root: 'data',
            successProperty: 'success'
        }
    }
});