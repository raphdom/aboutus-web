Ext.define('AboutUs.view.user.List', {
	extend: 'AboutUs.view.common.List',
    
    alias: 'widget.userlist',
    title : userListTitle,
    store: 'UserStore',
    icon:'resources/images/user.png',
    dialog: 'userdialog',
    controller: 'UserController',
    permissions:{
    	add:Constants.auth_adduser,
    	edit:Constants.auth_edituser,
    	remove:Constants.auth_deleteuser
    },
    columns: [
    {
    	header: "Nome",
		width: 170,
		flex:1,
		dataIndex: 'personName',
		criteriaName:'person.name',
		getSortParam: function() {
        	return this.criteriaName;
    	}
	},{
		header: "Email",
		width: 170,
		flex:1,
		dataIndex: 'email'
	},{
		header: "Igreja",
		width: 170,
		flex:1,
		dataIndex: 'churchName',
		criteriaXtype:'churchcombo',
		criteriaName:'church.id',
		getSortParam: function() {
        	return this.criteriaName;
    	}
	},{
		xtype:'booleanimagecolumn', 
		header: "Ativo",
		align:'center',
		flex:1,
		dataIndex:'activation',
		criteriaXtype:'combo'
	},{
		xtype:'booleanimagecolumn',
		align:'center',
		header: "Bloqueado",
		flex:1,
		dataIndex:'block',
		criteriaXtype:'combo'
	},{
		header: "Último acesso",
		width: 150,
		flex:1,
		dataIndex:'lastvisitDate',
		xtype:'datecolumn', 
		format:'d-m-Y H:i',
		criteriaXtype:'datefield'
	}],
	
	initComponent: function() {
		this.callParent(arguments);
	}
    
});