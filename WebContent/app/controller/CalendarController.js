Ext.define('AboutUs.controller.CalendarController', {
    extend: 'Ext.app.Controller',

    requires:['AboutUs.view.component.CategoryCombo',
    		  'AboutUs.view.component.ThumbField'],
    
    views: ['calendar.CalendarContainer',
    		'calendar.Dialog'],
    
    stores: ['EventStore','CalendarStore'],
    
    models: ['Event'],
    
    refs: [{
    	ref: 'eventDialog',
    	selector: 'eventdialog'
    }],
    
    init: function() {
    	this.addEvents({
    		onSave: true
    	});	
        this.control({
        });
    },
    
     processActionMenu: function(type){
    	var centerContainer = this.getController('MainController').getMainContainer().down('container[itemId=centerContainer]');
    	var list = Ext.create('AboutUs.view.calendar.CalendarContainer');
    	centerContainer.add(list);
    	centerContainer.setLoading(false);
    },
    
    onSave:function(record){
    	this.getEventDialog().onSave();
    }
    
});