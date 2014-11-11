Ext.define('AboutUs.model.site.Article', {
    extend: 'Ext.data.Model',
    fields: [
    	{
    		name:'id',
    		type:'int'
    	},{
    		name:'title'
    	},{
    		name:'created',
    		type:'date',
    		dateReadFormat:'time',
    		dateWriteFormat:'d-m-Y',
    		persist:false
    	},{
    		name:'publishUp',
    		type:'date',
    		dateReadFormat:'time'
    	},{
    		name:'publishDown',
    		type:'date',
    		dateReadFormat:'time'    		
    	},{
    		name: 'ordering',
    		type:'int'
    	},{
    		name: 'hits',
    		type:'int'
    	},{
    		name: 'author'
    	},{
    		name:'categoryName',
    		type:'string',
			persist:false
    	},{
    		name:'categoryId',
    		type:'int',
    		useNull:true
    	},{
    		name:'introarticle'
    	},{
    		name:'article'
    	},{
    		name:'thumbId',
    		type:'int'
    	},{
    		name:'homepage',
    		type:'boolean'
    	}],
    	
   	proxy: {
        type: 'ajax',
        api: {
        	read : 'site/article/get.action',
            create : 'site/article/save.action',
            update: 'site/article/save.action',
            destroy: 'site/article/delete.action'
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