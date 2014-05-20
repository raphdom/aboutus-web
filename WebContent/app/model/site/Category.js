Ext.define('AboutUs.model.site.Category', {
    extend: 'Ext.data.Model',
    fields: [
    	{
    		name:'id',
    		type:'int'
    	},{
    		name:'text'
    	},{
    		name:'description'
		},{
    		name:'parentId',
    		type:'int',
    		useNull:true
    	},{
    		name:'position',
    		type:'int'
    	},{
    		name:'publishedAlbuns',
    		type:'boolean'
    	},{
    		name:'publishedVideos',
    		type:'boolean'
		},{
    		name:'thumbId',
    		type:'int'
		},{
    		name:'leaf',
    		type:'boolean',
    		persist: false
    	}],
    	
   	proxy: {
        type: 'ajax',
        api: {
        	read : 'site/category/get.action',
            create : 'site/category/save.action',
            update: 'site/category/save.action',
            destroy: 'site/category/delete.action'
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