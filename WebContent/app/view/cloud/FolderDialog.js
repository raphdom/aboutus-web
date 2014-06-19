Ext.define('AboutUs.view.cloud.FolderDialog' ,{
    extend: 'Ext.window.Window',
    alias : 'widget.folderdialog',
    
    requires:['AboutUs.view.component.FolderCombo'],
    
    title: 'Nova pasta',
    height: 200,
    width: 400,
    layout: 'fit',
    modal: true,
    
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
						name:'text',
						allowBlank: false
					}]
        		}]
        	}]
    	}]
    }]
    
});