Ext.define('AboutUs.view.group.Dialog', {
    extend: 'AboutUs.view.common.Dialog',
    
    alias: 'widget.groupdialog',
    
    title: 'Grupo',
    
    urlLoad: 'group/get.action',
    urlSubmit: 'group/save.action',
    height: 400,
    layout:'fit',
    
    items:[{
    	xtype:'commonform',
   	    layout:'fit',
    	items:[{
        	xtype:'tabpanel',
        	items:[{
        		title:'Data',
        		layout: 'anchor',
        		bodyPadding: 10,
		        fieldDefaults: {
		            msgTarget: 'side',
		            labelWidth: 75
		        },
		        defaultType: 'textfield',
				items: [{
						fieldLabel: 'id',
						name : 'id',
						hidden:true
					},{
			            fieldLabel: 'Nome',
			            name: 'name',
			            allowBlank: false,
			            anchor: '100%'
					},{
						name : 'permissions',
						hidden:true
			        },{
			        	xtype:'fieldset',
			        	title: 'Permissões',
			        	layout: 'fit',
			            anchor: '100% -20',
			        	items :[{
			        		hidetoolbar:true,
			    			editColumn:false,
			        		xtype:'permissionlist'
			        	}]
		        }]
        	}]
    	}]
    }]
    
});