Ext.define('AboutUs.store.EventStore', {
    extend: 'Ext.data.Store',
	
    model: 'AboutUs.model.Event',
    
    remoteFilter:true,
    
    pageSize: 1000,
    
    proxy: {
        type: 'ajax',
        api: {
        	read : 'calendar/view.action',
            create : 'calendar/save.action',
            update: 'calendar/update.action',
            destroy: 'calendar/delete.action'
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
            allowSingle:false
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
        },
        encodeFilters: function(filters) {
	        var filtersOut = [];
	
	
	        for (var i = 0, l = filters.length; i < l; i++) {
	            filtersOut[i] = {
	                property: filters[i].property,
	                value:    filters[i].value,
	                operator: filters[i].operator,
	                type:     filters[i].type
	            };
	        }
	
	
	        return this.applyEncoding(filtersOut);
	    }
    }
});