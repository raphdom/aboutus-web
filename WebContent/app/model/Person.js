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
    		mapping:'civilStatus.civilStatusTranslates[0].text',
    		persist:false
		},{
    		name:'country',
    		mapping:'country.countryTranslates[0].text',
    		persist:false
    	},{
    		name:'isMember',
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
    		mapping:'memberType.memberTypeTranslates[0].text',
    		persist:false
    	}]
});