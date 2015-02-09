Ext.define('AboutUs.view.user.List', {
	extend: 'AboutUs.view.common.List',
    alias: 'widget.userlist',
    
    title : userListTitle,
    store: 'UserStore',
    icon:'resources/images/user.png',
    dialog: 'userdialog',
    controller: 'UserController',
    permissions:{
    	add:'ROLE_ADD_USERS',
    	edit:'ROLE_EDIT_USERS',
    	remove:'ROLE_DEL_USERS'
    },
    columns: [
    {
    	header: "Nome",
		flex:1,
		dataIndex: 'personName',
		criteriaName:'person.name',
		getSortParam: function() {
        	return this.criteriaName;
    	}
	},{
		header: "Email",
		flex:1,
		dataIndex: 'email'
	},{
		header: "Igreja",
		flex:1,
		dataIndex: 'churchName',
		criteriaXtype:'churchcombocriterion',
		criteriaName:'church.id',
		getSortParam: function() {
        	return this.criteriaName;
    	}
	},{
		xtype:'booleanimagecolumn', 
		header: "Ativo",
		align:'center',
		width: 80,
		dataIndex:'activation',
		criteriaXtype:'booleancriterion'
	},{
		xtype:'booleanimagecolumn',
		align:'center',
		header: "Bloqueado",
		width: 100,
		dataIndex:'block',
		criteriaXtype:'booleancriterion'
	},{
		header: "Último acesso",
		width: 130,
		dataIndex:'lastvisitDate',
		xtype:'datecolumn', 
		format:'d-m-Y H:i',
		criteriaXtype:'daterangecriterion'
	}],
	
	initComponent: function() {
		this.callParent(arguments);
	}
    
});