Ext.define('AboutUs.view.cloud.CloudContainer' ,{
    extend: 'Ext.panel.Panel',
    alias : 'widget.cloudcontainer',
    
    layout:'border',
    
    icon:'resources/images/mediaManager.png',
    
    title:'Disco',
    
    items: [{
                xtype: 'detailspanel'
            },{
                xtype: 'treecloudpanel'
            },{
                xtype: 'centercloudcontainer'
            }]
    
});