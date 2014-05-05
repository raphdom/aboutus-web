Ext.define('AboutUs.model.Address', {
    extend: 'Ext.data.Model',
    fields: [
    	{
    		name:'address',
    		type:'string'
    	},{
    		name:'state',
    		type:'string'
    	},{
    		name:'country',
    		type:'string'
    	},{
    		name:'postcode',
    		type:'string'
    	}],
    	
    	belongsTo: {model: 'AboutUs.model.Person', foreignKey: 'personId'}
});