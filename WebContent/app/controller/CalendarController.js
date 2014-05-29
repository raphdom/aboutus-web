Ext.define('AboutUs.controller.CalendarController', {
    extend: 'Ext.app.Controller',

    requires:['AboutUs.view.component.CategoryCombo',
    		  'AboutUs.view.component.ThumbField'],
    
    views: ['calendar.CalendarContainer',
    		'calendar.Dialog',
    		'calendar.TabPanel',
    		'calendar.TabEventData',
    		'calendar.TabEventDescription'],
    
    stores: ['EventStore','CalendarStore'],
    
    models: ['Event'],
    
    refs: [],
    
    init: function() {
        this.control({
        });
    },
    
     processActionMenu: function(type){
    	var centerContainer = this.getController('MainController').getMainContainer().down('container[itemId=centerContainer]');
    	var list = Ext.create('AboutUs.view.calendar.CalendarContainer');
    	centerContainer.add(list);
    	centerContainer.setLoading(false);
    }
    
});