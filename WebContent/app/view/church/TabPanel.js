Ext.define('AboutUs.view.church.TabPanel', {
    extend: 'Ext.tab.Panel',
    
    alias: 'widget.churchtabpanel',
    
    activeTab: 0,
    
    width:400,
    
    
    items:[
    {
    	xtype:'churchtabdata'
    }
    ]
    
});