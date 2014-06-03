Ext.define('AboutUs.model.site.Album', {
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
    		name: 'published',
    		type:'boolean'
    	},{
    		name:'categoryName',
    		type:'string',
			persist:false
    	},{
    		name:'categoryId',
    		type:'int'
    	},{
    		name:'thumbId',
    		type:'int'
    	}],
    	
	hasMany: [
   		{model: 'AboutUs.model.site.ItemAlbum', foreignKey: 'albumId', name:'items'}
	],
    	
   	proxy: {
        type: 'ajax',
        api: {
        	read : 'site/album/get.action',
            create : 'site/album/save.action',
            update: 'site/album/save.action',
            destroy: 'site/album/delete.action'
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