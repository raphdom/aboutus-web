Ext.define('AboutUs.store.EventStore', {
    extend: 'Extensible.calendar.data.EventStore',
    
    autoLoad: true,
    proxy: {
        type: 'ajax',
        url: 'event/view.action',
        noCache: false,
        
        reader: {
            type: 'json',
            root: 'data'
        },
        
        writer: {
            type: 'json',
            nameProperty: 'mapping'
        },
        
        listeners: {
            exception: function(proxy, response, operation, options){
                var msg = response.message ? response.message : Ext.decode(response.responseText).message;
                // ideally an app would provide a less intrusive message display
                Ext.Msg.alert('Server Error', msg);
            }
        }
    }
});