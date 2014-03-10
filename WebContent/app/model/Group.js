Ext.define('AboutUs.model.Group', {
    extend: 'Ext.data.Model',
    fields: [
    	{
    		name:'id',
    		type:'int'
    	},{
    		name:'name',
    		type:'string'
    	}],
    	
    
    	hasMany: [
    		{model: 'AboutUs.model.Permission', foreignKey: 'groupId', name:'permissions'}
    	],
    	belongsTo: {model: 'AboutUs.model.User', foreignKey: 'userId'},
    	
    	proxy: {
	        type: 'ajax',
	        api: {
	        	read : 'group/get.action',
	            create : 'group/save.action',
	            update: 'group/save.action',
	            destroy: 'grouop/delete.action'
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