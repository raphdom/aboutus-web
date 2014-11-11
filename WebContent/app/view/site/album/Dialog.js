Ext.define('AboutUs.view.site.album.Dialog', {
    extend: 'AboutUs.view.common.Dialog',
    
    alias: 'widget.sitealbumdialog',
    
    requires:['AboutUs.view.component.CategoryCombo',
    		  'AboutUs.view.component.ThumbField'],
    
    title: 'Novo Album',
    titleUpdate: 'Detalhes do album: {title}',
    
    icon:'resources/images/albuns.png',
    
    width:700,
    height:500,
    
    layout:'fit',
    
    items:[{
    	xtype:'commonform',
    	items:[{
        	xtype:'tabpanel',
        	layout:'fit',
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
						fieldLabel: 'Título',
						name:'title',
						allowBlank: false
					},{
						fieldLabel: 'Descrição',
						name:'description'
					},{
						fieldLabel: 'Ordem',
						name:'ordering',
						xtype: 'numberfield',
						minValue: 0,
						allowBlank: false
					},{
			            xtype: 'fieldcontainer',
			            fieldLabel: 'Publicado',
			            defaultType: 'checkboxfield',
			            layout: {
					    	type:'hbox',
					    	defaultMargins:{
							    right: 5
							}
					    },
			            items: [
			                {
			                    name      : 'published',
			                    inputValue: 'true',
			                    id        : 'checkbox1'
		                	}
			            ]
			        },{
						xtype:'categorycombo',
						fieldLabel: 'Categoria:',
						name:'categoryId',
						allowBlank: false,
						validator: function(value){
					    	if (value == 'Raiz'){
					    		return 'Tem de escolher uma categoria diferente de Raiz';
					    	}else{
					    		return true;
					    	}
					    }
					},{
			        	xtype: 'thumbfield',
				        fieldLabel: 'Miniatura',
				        name:'thumbId'
			        }]
        		}]
        	},{
        		xtype:'albumitemgrid'
        	}]
    	}]
    }]
    
});