Ext.define('AboutUs.view.person.List', {
	extend: 'AboutUs.view.common.List',
    
    alias: 'widget.personlist',

    title : 'Pessoas',
    store: 'PersonStore',
    icon:'resources/images/person.png',
    dialog: 'persondialog',
    controller: 'PersonController',
    permissions:{
    	add:'ROLE_ADD_PEOPLE',
    	edit:'ROLE_EDIT_PEOPLE',
    	remove:'ROLE_DEL_PEOPLE'
    },
    
    columns: [{
    	header: "Nome",
		flex:2,
		dataIndex: 'name'
	},{
		xtype:'booleanimagecolumn',
		trueImage:'resources/images/male.png',
    	falseImage:'resources/images/female.png',
		align:'center',
		width: 50,
		header: "Sexo",
		dataIndex:'male',
		criteriaXtype:'booleancriterion'
	},{
		header: "Estado Civil",
		flex:1,
		dataIndex: 'civilStatus',
		criteriaXtype:'civilstatuscriterion',
		criteriaName:'civilStatus.id'
	},{
		header: "Naturalidade",
		flex:1,
		dataIndex: 'naturality',
		criteriaXtype:'countrycriterion',
		criteriaName:'country.id',
		getSortParam: function() {
        	return this.criteriaName;
    	}
	},{
		xtype:'booleanimagecolumn',
		align:'center',
		header: "Membro",
		width: 80,
		dataIndex: 'member',
		criteriaXtype:'booleancriterion'
	},{
		header: "Nascimento",
		flex:1,
		dataIndex: 'birthday',
		xtype:'datecolumn', 
		format:'d-m-Y',
		criteriaXtype:'daterangecriterion'
	},{
		header: "NIF",
		flex:1,
		dataIndex: 'nif',
		criteriaXtype:'numbercriterion'
	},{
		header: "Profissão",
		flex:1,
		dataIndex: 'profession'
	},{
		header: "Tipo de membro",
		flex:1,
		dataIndex: 'memberType',
		criteriaXtype:'membertypecriterion',
		criteriaName:'memberType.id',
		getSortParam: function() {
        	return this.criteriaName;
    	}
	}],
	
	initComponent: function() {
		this.callParent(arguments);
	}
    
});