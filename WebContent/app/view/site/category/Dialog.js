Ext.define('AboutUs.view.site.category.Dialog', {
    extend: 'AboutUs.view.common.Dialog',
    
    alias: 'widget.sitecategorydialog',
    
    requires:['AboutUs.view.component.CategoryCombo'],
    
    title: 'Nova Categoria',
    titleUpdate: 'Detalhes da categoria: {name}',
    
    icon:'resources/images/categories.png',
    
    width:500,
    height:300,
    
    layout:'fit',
    
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
						xtype:'categorycombo',
						fieldLabel: 'Categoria pai:',
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