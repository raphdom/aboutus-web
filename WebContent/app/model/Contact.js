Ext.define('AboutUs.model.Contact', {
    extend: 'Ext.data.Model',
    fields: [
    	{
    		name:'id',
    		type:'int'
    	},{ 
    		name:'contactTypeValue',
    		type:'string'
    	},{
    		name:'value',
    		type:'string'
    	}],
    	
    belongsTo: {model: 'AboutUs.model.Person', foreignKey: 'personId'}
});