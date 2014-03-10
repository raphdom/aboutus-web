Ext.define('AboutUs.model.Permission', {
    extend: 'Ext.data.Model',
    fields: [
    	{
    		name:'id',
    		type:'int'
    	},{
    		name:'name',
    		type:'string'
    	}],
    	
	belongsTo: {model: 'AboutUs.model.User', foreignKey: 'userId'}
    	
     
});