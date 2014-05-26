Ext.define('AboutUs.controller.CalendarController', {
    extend: 'Ext.app.Controller',

    views: [
    		'calendar.CalendarContainer',
    		'calendar.CalendarPanel'
    ],
    
    stores: ['EventStore'],
    
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