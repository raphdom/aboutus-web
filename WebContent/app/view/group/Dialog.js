Ext.define('AboutUs.view.group.Dialog', {
    extend: 'AboutUs.view.common.Dialog',
    
    alias: 'widget.groupdialog',
    
    title: 'Grupo',
    
    urlLoad: 'group/get.action',
    urlSubmit: 'group/save.action',
    height: 400,
    
    items:[{
    	xtype: 'commonform',
        bodyPadding: 10,
        defaultType: 'textfield',
        items: [
       	{
			fieldLabel: 'id',
			name : 'id',
			hidden:true
		},{
            fieldLabel: 'Nome',
            name: 'name',
            allowBlank: false
		},{
			name : 'permissions',
			hidden:true
        },{
        	xtype:'fieldset',
        	title: 'Permissões',
        	height: 300,
        	items :[{
        		hidetoolbar:true,
    			editColumn:false,
        		xtype:'permissionlist'
        	}]
        }
        ]
    }]
    
    
});