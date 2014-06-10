Ext.define('AboutUs.view.main.MainContainer', {
    extend: 'Ext.container.Container',
    xtype: 'mainContainer',
    
    layout:'border',
    
    items: [
        {
        	region:'north',
        	height:90,
        	layout:'hbox',
        	bodyCls:'north',
        	items:[{
        		xtype:'container',
        		cls:'imageLogo',
        		width: 300,
        		height:80
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
    					menu      : [{
    						text: 'Meu Perfil',
    						action: 'myProfile',
    						icon:'resources/images/profile.png'
    					},{
    						text: 'Preferências',
    						action: 'preferences',
    						icon:'resources/images/configuration.png'
						},{
    						text: 'Alterar palavra-passe',
    						action: 'changePassword',
    						icon:'resources/images/lock.png'
    					},{
					        text: 'Sobre',
					        action : 'aboutus',
					        icon:'resources/images/question.png'
    					}]
    				},{
    					xtype:'container',
    					tpl: '<div class="userInfoBox">{name}</div>',
    					data: {name: 'Raphael Rodrigues Domingues'},
    					flex: 1
    				},{
    					xtype:'button',
    					text:'Sair',
    					icon:'resources/images/next.png',
    					action:'logout',
    					iconAlign: 'right'
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
        	xtype:'container',
            region: 'center',
            itemId:'centerContainer',
            layout:'fit',
            items:[]
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