Ext.define('AboutUs.model.Contact', {
    extend: 'Ext.data.Model',
    fields: [
    	{
    		name:'id',
    		type:'int'
    	},{ 
    		name:'type',
    		type:'string'
    	},{
    		name:'value',
    		type:'string'
    	}]
});