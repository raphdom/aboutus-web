Ext.define('AboutUs.store.site.ArticleStore', {
    extend: 'Ext.data.Store',
    model: 'AboutUs.model.site.Article',
    remoteFilter:true,
    remoteSort:true,
    pageSize: 35,
    
    
    proxy: {
        type: 'ajax',
        actionMethods: {
        	create: 'POST', read: 'POST', update: 'POST', destroy: 'POST'
        },
        api: {
        	read : 'site/article/view.action',
            create : 'site/article/save.action',
            update: 'site/article/update.action',
            destroy: 'site/article/delete.action'
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