Ext.define('AboutUs.view.music.playlist.Dialog', {
    extend: 'AboutUs.view.common.Dialog',
    
    alias: 'widget.playlistdialog',
    
    title: 'Nova Playlist',
    titleUpdate: 'Detalhes da playlist: {name}',
    
    icon:'resources/images/playlist.png',
    
    width:500,
    height:400,
    
    layout:'fit',
    
    items:[{
    	xtype:'commonform',
    	buttons:[{
    			text:'Slides',
    			action:'slide'
    	}],
    	items:[{
        	xtype:'tabpanel',
        	layout:'fit',
        	items:[/*{
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
						name:'name',
						editable: false,
						allowBlank: false
			        }]
        		}]
        	},*/{
        		title:'Musicas',
        		items:[{
        			xtype:'musicgrid'
        		}]
        	}]
    	}]
    }]
    
});