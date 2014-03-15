Ext.define('AboutUs.view.main.MainContainer', {
    extend: 'Ext.container.Container',
    xtype: 'mainContainer',
    
    layout:'border',
    
    items: [
        {
        	region:'north',
        	height:120,
        	cls:'imageLogo',
        	bodyCls:'imageLogoBody',
        	buttons:[
				{
					text:'Upload Dialog',
					icon:'resources/images/download-cloud.png',
					action:'cloudDialog',
					hidden:true
				},{
        			text:'Disco',
	        		icon:'resources/images/mediaManager.png',
	        		action:'cloud'
        		},{
	        		text:'Sair',
	        		icon:'resources/images/logout.png',
	        		action:'logout'
        		}
        	]
        },
        {
            region: 'center',
            itemId:'centerContainer',
            layout:'fit'
            
        },
        {
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