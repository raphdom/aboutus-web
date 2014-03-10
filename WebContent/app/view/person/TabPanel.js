Ext.define('AboutUs.view.person.TabPanel', {
    extend: 'Ext.tab.Panel',
    
    alias: 'widget.persontabpanel',
    
    activeTab: 0,
    
    items:[{
    	xtype:'persontabdata'
    },{
    	xtype:'persontabchurchdata'
	},{
    	xtype:'persontabaddress'
	},{
    	xtype:'persontabcontact'
	},{
    	xtype:'persontabobservation'
    }]
    
});