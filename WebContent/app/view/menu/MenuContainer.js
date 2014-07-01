Ext.define('AboutUs.view.menu.MenuContainer', {
    extend: 'Ext.container.Container',
    xtype: 'menuContainer',
    
    layout: 'border',
    
    
    initComponent: function() {
        var me = this;
        
        Ext.applyIf(me, {
        	items:[{
        		xtype:'container',
        		region:'north',
        		items:[{
			    	itemId:'global',
			    	xtype:'menu-list',
			    	selectFirst:true,
			    	menuItems:[
			    	       {
			    	    	   title:'Início',
			    	    	   icon:'resources/images/home.png',
			    	    	   controller:'HomeController',
			    	    	   type:'list',
			    	    	   visible:true
			    	       },{
			    	    	   title:'Disco',
			    	    	   icon:'resources/images/mediaManager.png',
			    	    	   controller:'CloudController',
			    	    	   type:'list',
			    	    	   visible:AboutUs.util.UserManager.hasPermission("ROLE_LIST_FILES")
			    	       },{
			    	    	   title:'Calendário',
			    	    	   icon:'resources/images/calendar.png',
			    	    	   controller:'CalendarController',
			    	    	   type:'list',
			    	    	   visible:AboutUs.util.UserManager.hasPermission("ROLE_LIST_EVENTS")
			    	       }
			    	 ]
        		}]
        	},{
        		xtype:'container',
        		layout: 'accordion',
        		region:'center',
        		flex:1,
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
			    	    	   visible:AboutUs.util.UserManager.hasPermission("ROLE_LIST_USERS")
			    	       },
			    	       {
			    	    	   title:'Grupos',
			    	    	   icon:'resources/images/groupManager.png',
			    	    	   controller:'GroupController',
			    	    	   type:'list',
			    	    	   visible:AboutUs.util.UserManager.hasPermission("ROLE_LIST_GROUPS")
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
			    	    	   controller:'site.CategoryController',
			    	    	   type:'list',
			    	    	   visible:AboutUs.util.UserManager.hasPermission("ROLE_LIST_CATEG")
			    	       },
			    	       {
			    	    	   title:'Artigos',
			    	    	   icon:'resources/images/article.png',
			    	    	   controller:'site.ArticleController',
			    	    	   type:'list',
			    	    	   visible:AboutUs.util.UserManager.hasPermission("ROLE_LIST_ARTICLES")
			    	       },
			    	       {
			    	    	   title:'Vídeos',
			    	    	   icon:'resources/images/videos.png',
			    	    	   controller:'site.VideoController',
			    	    	   type:'list',
			    	    	   visible:AboutUs.util.UserManager.hasPermission("ROLE_LIST_VIDEOS")
			    	       },
			    	       {
			    	    	   title:'Albuns',
			    	    	   icon:'resources/images/albuns.png',
			    	    	   controller:'site.AlbumController',
			    	    	   type:'list',
			    	    	   visible:AboutUs.util.UserManager.hasPermission("ROLE_LIST_ALBUNS")
			    	       },
			    	       {
			    	    	   title:'Banners',
			    	    	   icon:'resources/images/banners.png',
			    	    	   controller:'site.BannerController',
			    	    	   type:'list',
			    	    	   visible:AboutUs.util.UserManager.hasPermission("ROLE_LIST_BANNERS")
			    	       }
			    	       ]
			    },{
			        title: 'Música',
			        itemId:'music',
			        xtype:'menu-list',
			        icon:'resources/images/music.png',
			    	menuItems:[{
			    	    	   title:'Músicas',
			    	    	   icon:'resources/images/music.png',
			    	    	   controller:'music.MusicController',
			    	    	   type:'list',
			    	    	   visible:AboutUs.util.UserManager.hasPermission("ROLE_LIST_MUSICS")
			    	       },{
			    	    	   title:'Listas de Reprodução',
			    	    	   icon:'resources/images/playlist.png',
			    	    	   controller:'music.PlaylistController',
			    	    	   type:'list',
			    	    	   visible:AboutUs.util.UserManager.hasPermission("ROLE_LIST_PLAYLISTS")
	    	        }]
			    }]
        	}]
        })
        me.callParent(arguments);
	}
    
});