Ext.define('AboutUs.model.site.Video', {
    extend: 'Ext.data.Model',
    fields: [
    	{
    		name:'id',
    		type:'int'
    	},{
    		name:'title'
    	},{
    		name:'description'
		},{
    		name: 'ordering',
    		type:'int'
		},{
			name: 'url'
		},{
    		name:'published',
    		type:'boolean'
    	},{
    		name:'categoryName',
    		type:'string',
			persist:false
    	},{
    		name:'categoryId',
    		type:'int',
    		useNull:true
    	}],
    	
   	proxy: {
        type: 'ajax',
        api: {
        	read : 'site/video/get.action',
            create : 'site/video/save.action',
            update: 'site/video/save.action',
            destroy: 'site/video/delete.action'
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