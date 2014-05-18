Ext.define('AboutUs.model.site.Category', {
    extend: 'Ext.data.Model',
    fields: [
    	{
    		name:'id',
    		type:'int'
    	},{
    		name:'text'
    	}],
    	
   	proxy: {
        type: 'ajax',
        api: {
        	read : 'site/category/get.action',
            create : 'site/category/save.action',
            update: 'site/category.action',
            destroy: 'site/category.action'
        },
        reader: {
            type: 'json',
            root: 'data',
            successProperty: 'success'
        },
        writer: {
            type: 'associatedjson',
            writeAllFields: true,
            encode: false
        }
    }
   	
});