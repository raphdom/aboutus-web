Ext.define('AboutUs.view.site.video.Dialog', {
    extend: 'AboutUs.view.common.Dialog',
    
    alias: 'widget.sitevideodialog',
    
    requires:['AboutUs.view.component.CategoryCombo',
    		  'AboutUs.view.component.ThumbField'],
    
    title: 'Novo Video',
    titleUpdate: 'Detalhes do video: {title}',
    
    icon:'resources/images/videos.png',
    
    width:600,
    height:300,
    
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
						name:'description',
						allowBlank: false
					},{
						fieldLabel: 'Url',
						name:'url',
						allowBlank: false
					},{
						fieldLabel: 'Ordem',
						name:'ordering',
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
						allowBlank: false
			        }]
        		}]
        	}]
    	}]
    }]
    
});