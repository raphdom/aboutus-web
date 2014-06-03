Ext.define('AboutUs.model.site.Banner', {
    extend: 'Ext.data.Model',
    fields: [
    	{
    		name:'id',
    		type:'int'
    	},{
    		name:'name'
    	},{
    		name:'alias'
    	},{
    		name:'link'
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
    		name:'bannerId',
    		type:'int'
    	}],
    	
   	proxy: {
        type: 'ajax',
        api: {
        	read : 'site/banner/get.action',
            create : 'site/banner/save.action',
            update: 'site/banner/save.action',
            destroy: 'site/banner/delete.action'
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