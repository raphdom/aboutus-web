Ext.define('AboutUs.model.User', {
    extend: 'Ext.data.Model',
    fields: [
    	{
    		name:'id',
    		type:'int'
    	},{
    		name:'email',
    		type:'string'
    	},{
    		name:'lastvisitDate',
    		type:'date',
    		dateReadFormat:'time',
    		dateWriteFormat:'d-m-Y',
    		persist:false
    	},{
    		name:'activation',
    		type:'boolean',
    		persist:false
		},{
    		name:'block',
    		type:'boolean',
    		persist:false
    	},{
    		name:'personId',
    		type:'int',
    		useNull:true
		},{
    		name:'personName',
    		type:'string',
			persist:false
		},{
    		name:'churchId',
    		type:'int',
    		useNull:true
		},{
    		name:'churchName',
    		type:'string',
			persist:false
		},{
			name: 'language',
			type:'string'
		},{
			name: 'avatarId',
			type:'int'
    	},{
    		name:'groups'
    	},{
    		name:'permissions'
    	}],
    	
   	proxy: {
        type: 'ajax',
        api: {
        	read : 'user/get.action',
            create : 'user/save.action',
            update: 'user/save.action',
            destroy: 'user/delete.action'
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