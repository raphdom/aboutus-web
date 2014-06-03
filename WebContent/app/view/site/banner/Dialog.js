Ext.define('AboutUs.view.site.banner.Dialog', {
    extend: 'AboutUs.view.common.Dialog',
    
    alias: 'widget.sitebannerdialog',
    
    requires:['AboutUs.view.component.CategoryCombo',
    		  'AboutUs.view.component.ThumbField'],
    
    title: 'Novo Banner',
    titleUpdate: 'Detalhes do banner: {name}',
    
    icon:'resources/images/banners.png',
    
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
						fieldLabel: 'Name',
						name:'name',
						allowBlank: false
					},{
						fieldLabel: 'Alias',
						name:'alias',
						allowBlank: false
					},{
						fieldLabel: 'Link',
						name:'link',
						allowBlank: false
					},{
						fieldLabel: 'Ordem',
						name:'ordering',
						allowBlank: false
					},{
						xtype: 'datefield',
						fieldLabel: 'Início da Publicação',	
						name:'publishUp',
						allowBlank: false
					},{
						xtype: 'datefield',
						fieldLabel: 'Fim da Publicação',	
						name:'publishDown',
						allowBlank: false
					},{
			        	xtype: 'thumbfield',
				        fieldLabel: 'Banner',
				        name:'bannerId'
			        }]
        		}]
        	}]
    	}]
    }]
    
});