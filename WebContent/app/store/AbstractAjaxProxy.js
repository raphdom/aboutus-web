Ext.define('AboutUs.store.AbstractAjaxProxy', {
    extend: 'Ext.data.proxy.Ajax',
    
    actionMethods: {
    	create: 'POST', read: 'POST', update: 'POST', destroy: 'POST'
    },
    headers: {
    	'Accept': 'application/json',
    	'Content-Type': 'application/json;'
    },
    reader: {
        type: 'json',
        root: 'data',
        successProperty: 'success'
    },
    writer: {
        type: 'json',
        writeAllFields: true,
        encode: true,
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
});