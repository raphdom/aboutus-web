Ext.define('AboutUs.model.Audit', {
    extend: 'Ext.data.Model',
    fields: [
    	{
    		name:'id',
    		type:'int'
    	},{
    		name:'action',
    		type:'string'
    	},{
    		name:'actionDate',
    		type:'date',
    		dateReadFormat:'time'
    	}]
   	
});