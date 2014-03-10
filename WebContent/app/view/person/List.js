Ext.define('AboutUs.view.person.List', {
	extend: 'AboutUs.view.common.List',
    
    alias: 'widget.personlist',
    
    title : 'Pessoas',
    store: 'PersonStore',
    icon:'resources/images/person.png',
    dialog: 'persondialog',
    controller: 'PersonController',
    permissions:{
    	add:Constants.auth_adduser,
    	edit:Constants.auth_edituser,
    	remove:Constants.auth_deleteuser
    },
    
    columns: [{
    	header: "Nome",
		width: 170,
		flex:1,
		dataIndex: 'name'
	},{
		xtype:'booleanimagecolumn',
		align:'center',
		header: "Sexo",
		flex:1,
		dataIndex:'male',
		criteriaXtype:'combo'
	},{
		header: "Estado Civil",
		width: 170,
		flex:1,
		dataIndex: 'civilStatus'
	},{
		header: "Naturalidade",
		width: 170,
		flex:1,
		dataIndex: 'country'
	},{
		xtype:'booleanimagecolumn',
		align:'center',
		header: "Membro",
		width: 170,
		flex:1,
		dataIndex: 'isMember'
	},{
		header: "Nascimento",
		width: 170,
		flex:1,
		dataIndex: 'birthday',
		xtype:'datecolumn', 
		format:'d-m-Y',
		criteriaXtype:'datefield'
	},{
		header: "NIF",
		width: 170,
		flex:1,
		dataIndex: 'nif'
	},{
		header: "Profissão",
		width: 170,
		flex:1,
		dataIndex: 'profession'
	},{
		header: "Tipo de membro",
		width: 170,
		flex:1,
		dataIndex: 'memberType'
	}],
	
	initComponent: function() {
		this.callParent(arguments);
	}
    
});