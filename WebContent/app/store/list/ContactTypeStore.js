Ext.define('AboutUs.store.list.ContactTypeStore', {
    extend: 'Ext.data.Store',
    fields: ['value','text'], 
    proxy: {
        type: 'ajax',
        api: {
        	read : 'list/contactType.action'
        },
        reader: {
            type: 'json',
            root: 'data',
            successProperty: 'success'
        }
    }
});