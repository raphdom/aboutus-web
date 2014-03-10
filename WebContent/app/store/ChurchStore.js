Ext.define('AboutUs.store.ChurchStore', {
    extend: 'Ext.data.Store',
    model: 'AboutUs.model.Church',
    
    remoteFilter:true,
    remoteSort:true,
    pageSize: 35,
    
    proxy: {
        type: 'ajax',
        api: {
        	read : 'church/view.action',
            create : 'church/create.action',
            update: 'church/update.action',
            destroy: 'church/delete.action'
        },
        reader: {
            type: 'json',
            root: 'data',
            successProperty: 'success'
        },
        writer: {
            type: 'json',
            writeAllFields: true,
            encode: false,
            root: 'data'
        },
        listeners: {
            exception: function(proxy, response, operation){
                Ext.MessageBox.show({
                    title: 'REMOTE EXCEPTION',
                    msg: operation.getError(),
                    icon: Ext.MessageBox.ERROR,
                    buttons: Ext.Msg.OK
                });
            }
        }
    }
});