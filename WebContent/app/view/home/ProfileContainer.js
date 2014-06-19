Ext.define('AboutUs.view.home.ProfileContainer', {
    extend: 'Ext.container.Container',
    xtype: 'profilecontainer',
    
    //layout:'border',
    
    items:[],
    
    initComponent: function() {
        var me = this;
        
        Ext.applyIf(me, {
        	cls:'profileContainer',
        	tpl: [
		        '<div class="profileAvatar">',
		        	'<img src="{avatarId:formatThumbProfile}" width="150px" height="120px"/>',
		        '</div>',
		        '<div class="profileData">',
		        	'<div class="profileName">{name}</div>',
		        	'<div class="profileEmail"><b>Email:</b> {email}</div>',
		        '</div>'
		    ],
		    
		    data: AboutUs.util.UserManager.getUser().data
        });
        
        me.callParent(arguments);
    }
    
});