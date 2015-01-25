Ext.define('AboutUs.view.user.List', {
	extend: 'AboutUs.view.common.List',
    alias: 'widget.userlist',
    
    requires:['AboutUs.view.component.DataRangeCriteria'],
    
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
		criteriaXtype:'churchcombo',
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
		criteriaXtype:'checkbox'
	},{
		xtype:'booleanimagecolumn',
		align:'center',
		header: "Bloqueado",
		width: 100,
		dataIndex:'block',
		criteriaXtype:'checkbox'
	},{
		header: "Último acesso",
		width: 130,
		dataIndex:'lastvisitDate',
		xtype:'datecolumn', 
		format:'d-m-Y H:i',
		criteriaXtype:'datarangecriteria'
	}],
	
	initComponent: function() {
		this.callParent(arguments);
	}
    
});