Ext.define('AboutUs.store.list.CivilStatusStore', {
    extend: 'Ext.data.Store',
    fields: ['value','text'], 
    proxy: {
        type: 'ajax',
        api: {
        	read : 'list/civilStatus.action'
        },
        reader: {
            type: 'json',
            root: 'data',
            successProperty: 'success'
        }
    }
});