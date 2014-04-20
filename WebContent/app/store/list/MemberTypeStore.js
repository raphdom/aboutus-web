Ext.define('AboutUs.store.list.MemberTypeStore', {
    extend: 'Ext.data.Store',
    fields: ['value','text'], 
    proxy: {
        type: 'ajax',
        api: {
        	read : 'list/memberType.action'
        },
        reader: {
            type: 'json',
            root: 'data',
            successProperty: 'success'
        }
    }
});