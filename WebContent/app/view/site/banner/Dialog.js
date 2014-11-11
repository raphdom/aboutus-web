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
						fieldLabel: 'Link',
						name:'link'
					},{
						fieldLabel: 'Ordem',
						name:'ordering',
						xtype: 'numberfield',
						minValue: 0,
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
			        	xtype: 'thumbfield',
				        fieldLabel: 'Banner',
				        name:'bannerId'
			        }]
        		}]
        	}]
    	}]
    }]
    
});