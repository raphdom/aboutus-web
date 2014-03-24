Ext.define('AboutUs.view.group.Dialog', {
    extend: 'AboutUs.view.common.Dialog',
    
    alias: 'widget.groupdialog',
    
    title: 'Grupo',
    
    urlLoad: 'group/get.action',
    urlSubmit: 'group/save.action',
    
    items:[{
    	xtype: 'commonform',
        layout: 'form',
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
        	layout:'anchor',
        	items :[{
        		hidetoolbar:true,
    			editColumn:false,
        		xtype:'permissionlist'
        	}]
        }
        ]
    }]
    
    
});