Ext.define('AboutUs.view.menu.MenuContainer', {
    extend: 'Ext.container.Container',
    xtype: 'menuContainer',
    
    layout: 'accordion',
    
    
    initComponent: function() {
        var me = this;
        
        Ext.applyIf(me, {
        	items:[{
		    	title: 'Utilizadores',
		    	itemId:'users',
		    	icon:'resources/images/userManager.png',
		    	xtype:'menu-list',
		    	menuItems:[
		    	       {
		    	    	   title:'Utilizadores',
		    	    	   icon:'resources/images/user.png',
		    	    	   controller:'UserController',
		    	    	   type:'list',
		    	    	   visible:AboutUs.util.UserManager.hasPermission(Constants.auth_listuser)
		    	       },
		    	       {
		    	    	   title:'Grupos',
		    	    	   icon:'resources/images/groupManager.png',
		    	    	   controller:'GroupController',
		    	    	   type:'list',
		    	    	   visible:AboutUs.util.UserManager.hasPermission(Constants.auth_listgroup)
		    	       }
		    	       ]
		    },{
		        title: 'Igreja',
		        itemId:'church',
		        icon:'resources/images/church.png',
		        xtype:'menu-list',
		    	menuItems:[
		    	       {
		    	    	   title:'Pessoas',
		    	    	   icon:'resources/images/personManager.png',
		    	    	   controller:'PersonController',
		    	    	   type:'list',
		    	    	   visible:true
		    	       },
		    	       {
		    	    	   title:'Igrejas',
		    	    	   icon:'resources/images/church.png',
		    	    	   controller:'ChurchController',
		    	    	   type:'list',
		    	    	   visible:true
		    	       }
		    	       ]
		    },{
		        title: 'Site',
		        itemId:'webSite',
		        icon:'resources/images/globe.png',
		        xtype:'menu-list',
		    	menuItems:[
		    	       {
		    	    	   title:'Categorias',
		    	    	   icon:'resources/images/categories.png',
		    	    	   visible:true
		    	       },
		    	       {
		    	    	   title:'Artigos',
		    	    	   icon:'resources/images/article.png',
		    	    	   visible:true
		    	       },
		    	       {
		    	    	   title:'V�deos',
		    	    	   icon:'resources/images/videos.png',
		    	    	   visible:true
		    	       },
		    	       {
		    	    	   title:'Albuns',
		    	    	   icon:'resources/images/albuns.png',
		    	    	   visible:true
		    	       },
		    	       {
		    	    	   title:'Banners',
		    	    	   icon:'resources/images/banners.png',
		    	    	   visible:true
		    	       }
		    	       ]
		    },{
		        title: 'M�sica',
		        itemId:'music',
		        xtype:'menu-list',
		        icon:'resources/images/music.png',
		    	menuItems:[
		    	       {
		    	    	   title:'Listas de Reprodu��o',
		    	    	   icon:'resources/images/playlist.png',
		    	    	   visible:true
		    	       },
		    	       {
		    	    	   title:'M�sicas',
		    	    	   icon:'resources/images/music.png',
		    	    	   visible:true
		    	       }
		    	       ]
		    }]
        })
        me.callParent(arguments);
	}
    
});