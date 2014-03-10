Ext.define('AboutUs.store.PermissionStore', {
    extend: 'Ext.data.Store',
    model: 'AboutUs.model.Permission',
    pageSize: 1000,
    autoLoad:true,
    proxy: {
        type: 'ajax',
        api: {
        	read : 'permission/view.action'
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