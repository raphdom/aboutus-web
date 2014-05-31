Ext.define('AboutUs.view.home.HomeContainer', {
    extend: 'Ext.panel.Panel',
    xtype: 'homecontainer',
    
    layout:'border',
    
    icon:'resources/images/home.png',
    
    title:'Início',
    
    items: [{
                xtype: 'panel',
                region: 'center',
                title: 'Profile',
                items: [{
                	xtype: 'profilecontainer'
                },{
                	xtype:'auditcontainer'
                }]
            },{
                xtype: 'whoonlinecontainer',
                region: 'east'
            },{
                xtype: 'dashboardcontainer',
                region: 'south'
            }]
    
});