Ext.define('AboutUs.view.music.music.Dialog', {
    extend: 'AboutUs.view.common.Dialog',
    
    alias: 'widget.musicdialog',
    
    requires:['AboutUs.view.component.CategoryCombo',
    		  'AboutUs.view.component.ThumbField'],
    
    title: 'Nova Música',
    titleUpdate: 'Detalhes da música: {title}',
    
    icon:'resources/images/music.png',
    
    width:600,
    height:400,
    
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
						fieldLabel: 'Tempo',
						name:'time'
					},{
						fieldLabel: 'Tom original',
						name:'originalTone'
					},{
						fieldLabel: 'Bateria',
						name:'drumsStyle'
					},{
						fieldLabel: 'Link',
						name:'link'
					},{
						fieldLabel: 'Autor',
						name:'author'
					},{
						fieldLabel: 'Notas',
						name:'musicNotes'
					},{
			            xtype: 'fieldcontainer',
			            fieldLabel: 'Favorito',
			            defaultType: 'checkboxfield',
			            layout: {
					    	type:'hbox',
					    	defaultMargins:{
							    right: 5
							}
					    },
			            items: [
			                {
			                    name      : 'favorite',
			                    inputValue: 'true',
			                    id        : 'checkbox1'
		                	}
			            ]
			        }]
        		}]
        	},{
        		title:'Letra',
        		layout:'fit',
        		items:[{
        			xtype     : 'textareafield',
			    	emptyText : 'Digita aqui a letra da música',
			        name      : 'liryc'
        		}]
        	},{
        		title:'Conteúdo',
        		layout:'fit',
        		items:[{
        			xtype     : 'textareafield',
			    	emptyText : 'Digita aqui a cifra da música',
			        name      : 'content'
        		}]
    		},{
        		title:'Observações',
        		layout:'fit',
        		items:[{
        			xtype     : 'textareafield',
			    	emptyText : 'Digita aqui as observações',
			        name      : 'observations'
        		}]
        	}]
    	}]
    }]
    
});