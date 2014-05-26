Ext.define('AboutUs.model.Event', {
    extend: 'Ext.data.Model',
   fields: [
    	{
    		name:'id',
    		type:'int'
    	},{ 
    		 name: 'Title',
        	mapping: 'title',
    		type:'string'
    	},{
    		name: 'StartDate',
        	mapping: 'start',
	   		type:'date',
    		dateReadFormat:'time',
    		dateFormat: 'c'
    	},{
    		name: 'EndDate',
        	mapping: 'end',
    		type:'date',
    		dateReadFormat:'time',
    		dateFormat: 'c'
    	}]
});