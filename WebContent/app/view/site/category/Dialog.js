Ext.define('AboutUs.view.site.category.Dialog', {
    extend: 'AboutUs.view.common.Dialog',
    
    alias: 'widget.sitecategorydialog',
    
    requires:['AboutUs.view.component.CategoryCombo',
    		  'AboutUs.view.component.ThumbField'],
    
    title: 'Nova Categoria',
    titleUpdate: 'Detalhes da categoria: {name}',
    
    icon:'resources/images/categories.png',
    
    width:500,
    height:400,
    
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
					},{
						fieldLabel: 'Ordem',
						name:'text',
						allowBlank: false
					},{
			            xtype: 'fieldcontainer',
			            fieldLabel: 'Publicado em',
			            defaultType: 'checkboxfield',
			            layout: {
					    	type:'hbox',
					    	defaultMargins:{
							    right: 5
							}
					    },
			            items: [
			                {
			                    boxLabel  : 'Fotos',
			                    name      : 'publishedIn',
			                    inputValue: '1',
			                    id        : 'checkbox1'
		                	}, {
			                    boxLabel  : 'Videos',
			                    name      : 'publishedIn',
			                    inputValue: '2',
			                    id        : 'checkbox2'
			                }
			            ]
			        },{
			        	xtype: 'thumbfield',
				        fieldLabel: 'Miniatura'
			        }]
        		}]
        	}]
    	}]
    }]
    
});