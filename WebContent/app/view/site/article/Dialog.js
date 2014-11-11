Ext.define('AboutUs.view.site.article.Dialog', {
    extend: 'AboutUs.view.common.Dialog',
    
    alias: 'widget.sitearticledialog',
    
    requires:['AboutUs.view.component.CategoryCombo',
    		  'AboutUs.view.component.ThumbField'],
    
    title: 'Novo Artigo',
    titleUpdate: 'Detalhes do artigo: {title}',
    
    icon:'resources/images/article.png',
    
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
			            xtype: 'fieldcontainer',
			            fieldLabel: 'Publicação',
			            defaultType: 'datefield',
			            layout: {
					    	type:'hbox',
					    	align:'stretchmax',
					    	defaultMargins:{
							    right: 25
							}
					    },
			            items: [
			                {
			                    name      : 'publishUp',
			                    format: 'd/m/Y',
			                    id        : 'publishUp',
			                    fieldLabel: 'Início da Publicação',
			                    hideLabel: true,
			                    allowBlank: false
		                	},{
		                		xtype: 'displayfield',
						        name: 'untilLabel',
						        value: 'até'
		                	},{
			                    name      : 'publishDown',
			                    format: 'd/m/Y',
			                    id        : 'publishDown',
			                    emptyText: 'sempre'
		                	}
			            ]
					},{
			            xtype: 'fieldcontainer',
			            fieldLabel: 'Pagina inicial',
			            defaultType: 'checkboxfield',
			            layout: {
					    	type:'hbox',
					    	defaultMargins:{
							    right: 5
							}
					    },
			            items: [
			                {
			                    name      : 'homepage',
			                    inputValue: 'true',
			                    id        : 'checkbox1'
		                	}
			            ]
		            },{
						fieldLabel: 'Ordem',
						name:'ordering',
						xtype: 'numberfield',
						minValue: 0,
						allowBlank: false
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
						fieldLabel: 'Autor',
						name:'author'
					},{
			        	xtype: 'thumbfield',
				        fieldLabel: 'Miniatura',
				        name:'thumbId'
			        }]
        		}]
        	},{
        		title:'Introdução',
        		layout:'fit',
        		items:[{
        			xtype     : 'htmleditor',
			    	emptyText : 'Digita aqui a introdução do artigo',
			        name      : 'introarticle'
        		}]
        	},{
        		title:'Conteúdo',
        		layout:'fit',
        		items:[{
        			xtype     : 'htmleditor',
			    	emptyText : 'Digita aqui o conteúdo do artigo',
			        name      : 'article'
        		}]
        	}]
    	}]
    }]
    
});