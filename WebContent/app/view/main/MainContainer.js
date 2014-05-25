Ext.define('AboutUs.view.main.MainContainer', {
    extend: 'Ext.container.Container',
    xtype: 'mainContainer',
    
    layout:'border',
    
    items: [
        {
        	region:'north',
        	height:120,
        	layout:'hbox',
        	bodyCls:'north',
        	items:[{
        		xtype:'container',
        		cls:'imageLogo',
        		width: 300,
        		height:100
        	},{
        		xtype:'container',
        		cls:'northMiddle',
        		flex: 1
        	},{
        		xtype:'panel',
        		width: 400,
        		height:120,
        		bodyCls:'north',
    			items:[{
    				xtype:'container',
    				cls:'userInfo',
    				layout: 'hbox',
    				items:[{
    					xtype:'button',
    					icon:'resources/images/userManager.png',
    					menu      : [
					        {text: 'Meu Perfil'},
					        {text: 'Preferências'},
					        {text: 'Sobre'}
					    ]
    				},{
    					xtype:'container',
    					tpl: '<div class="userInfoBox">{name}</div>',
    					data: {name: 'Raphael Rodrigues Domingues'},
    					flex: 1
    				},{
    					xtype:'button',
    					icon:'resources/images/logout.png',
    					action:'logout'
    				}]
    			}],
    			buttons:[
					{
						text:'Upload Dialog',
						icon:'resources/images/download-cloud.png',
						action:'cloudDialog',
						hidden:true
	        		}
        		]
        	}]
        },{
            region: 'center',
            itemId:'centerContainer',
            layout:'fit'
            
        },{
            region:'west',
            width:200,
            collapsible:true,
            split:true,
            title:'Menu',
            layout:'fit',
            items:[]
        }
    ]
    
});