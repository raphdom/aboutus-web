Ext.define('AboutUs.view.user.TabUserPermission', {
    extend: 'Ext.panel.Panel',
    
    alias: 'widget.usertabuserpermission',
    
    title:'Grupos/Permiss�es',
    
    header:false,
    
    layout:{
    	type:'hbox',
    	align:'stretchmax'
    },
   
    items:[{
    		title:'Grupos',
    		xtype:'grouplist',
    		flex:1,
    		hidetoolbar:true,
    		editColumn:false,
    		scroll:true
    	},{
    		title:'Permiss�es',
    		xtype:'permissionlist',
    		flex:1,
    		hidetoolbar:true,
    		editColumn:false,
    		scroll:true
	}]
    
    
});