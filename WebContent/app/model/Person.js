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
    		name:'civilStatusValue',
    		type:'string',
    		useNull:true
		},{
    		name:'naturality',
    		persist:false
    	},{
    		name:'naturalityValue',
    		type:'string',
    		useNull:true
    	},{
    		name:'member',
    		type:'boolean'
    	},{
    		name:'birthday',
    		type:'date',
    		dateReadFormat:'time'
    	},{
    		name:'nif'
    	},{
    		name:'profession'
		},{
    		name:'member',
    		type:'boolean'
    	},{
    		name:'memberType',
    		persist:false
		},{
    		name:'memberTypeValue',
    		type:'string',
    		useNull:true
    	},{
    		name:'baptized',
    		type:'boolean'
    	},{
    		name:'baptismdate',
    		type:'date',
    		dateReadFormat:'time'
    	},{
    		name:'consolidated',
    		type:'boolean'
    	},{
    		name:'arrivalChurchDate',
    		type:'date',
    		dateReadFormat:'time'
    	},{
    		name:'precedingChurch',
    		type:'string'
		},{
    		name:'observations',
    		type:'string'
    	}],

	hasMany: [
   		{model: 'AboutUs.model.Address', foreignKey: 'personId', name:'addresses'},
   		{model: 'AboutUs.model.Contact', foreignKey: 'personId', name:'contacts'}
	],
    	
	proxy: {
        type: 'ajax',
        api: {
        	read : 'person/get.action',
            create : 'person/save.action',
            update: 'person/save.action',
            destroy: 'person/delete.action'
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