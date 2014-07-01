Ext.define('AboutUs.view.user.TabUserPermission', {
    extend: 'Ext.panel.Panel',
    
    alias: 'widget.usertabuserpermission',
    
    title:'Grupos/Permissões',
    
    layout:{
    	type:'hbox',
    	align:'stretchmax'
    },
   
    items:[{
    		title:'Grupos',
    		xtype:'grouplist',
    		hidetoolbar:true,
    		editColumn:false,
    		autoScroll:true,
    		flex:1
    	},{
    		title:'Permissões',
    		xtype:'permissionlist',
    		hidetoolbar:true,
    		editColumn:false,
    		autoScroll:true,
    		flex:1
	}]
    
    
});