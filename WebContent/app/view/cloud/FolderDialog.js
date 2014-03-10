Ext.define('AboutUs.view.cloud.FolderDialog' ,{
    extend: 'AboutUs.view.common.Dialog',
    alias : 'widget.folderdialog',
    
    requires:['AboutUs.view.component.FolderCombo'],
    
    title: 'Nova pasta',
    height: 200,
    width: 400,
    modal:true,
    layout: 'fit',
    
    items:[{
    	xtype:'commonform',
    	items:[{
        	xtype:'tabpanel',
        	items:[{
        		title:'Data',
        		items:[{
        			 layout: 'form',
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
						xtype:'foldercombo',
						fieldLabel: 'Pasta:',
						name:'parent',
						allowBlank: false
					},{
						fieldLabel: 'Nome',
						name:'name',
						allowBlank: false
					}]
        		}]
        	},{
        		title:'Permissões'
        	}]
    	}]
    }]
    
});