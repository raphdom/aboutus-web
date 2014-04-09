Ext.define('AboutUs.model.Person', {
    extend: 'Ext.data.Model',
    fields: [
    	{
    		name:'id',
    		type:'int'
    	},{ 
    		name:'name',
    		type:'string'
    	},{
    		name:'male',
    		type:'boolean'
    	},{
    		name:'civilStatus',
    		persist:false
		},{
    		name:'naturality',
    		persist:false
    	},{
    		name:'member',
    		type:'boolean'
    	},{
    		name:'birthday',
    		type:'date',
    		dateReadFormat:'time',
    		dateWriteFormat:'d-m-Y'
    	},{
    		name:'nif'
    	},{
    		name:'profession'
    	},{
    		name:'memberType',
    		persist:false
    	}]
});