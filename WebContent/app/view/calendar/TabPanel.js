Ext.define('AboutUs.view.calendar.TabPanel', {
    extend: 'Ext.tab.Panel',
    
    alias: 'widget.eventtabpanel',
    
    activeTab: 0,
    deferredRender:false,
    
    items:[{
    	xtype:'tabeventdata'
    },{
    	xtype:'tabeventdescription'
    }]
    
});