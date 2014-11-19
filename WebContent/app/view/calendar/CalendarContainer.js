Ext.define('AboutUs.view.calendar.CalendarContainer' ,{
    extend: 'Ext.container.Container',
    alias : 'widget.calendarcontainer',
    
    requires: [
    	'Extensible.Extensible',
        'Extensible.calendar.CalendarPanel',
        'Extensible.calendar.gadget.CalendarListPanel',
        'Extensible.calendar.data.MemoryCalendarStore',
        'Extensible.calendar.data.MemoryEventStore',
        'AboutUs.view.calendar.data.Calendars'
    ],
    
    constructor : function(config) {
        
        this.calendarStore = Ext.create('Extensible.calendar.data.MemoryCalendarStore', {
            data: AboutUs.view.calendar.data.Calendars.getData()
        });

        this.eventStore = AboutUs.app.getStore('EventStore');
        
        this.callParent([Ext.apply({
            layout: 'border',
            items: [{
                id: 'app-center',
                icon:'resources/images/calendar.png',
                title: '...',
                region: 'center',
                layout: 'border',
                listeners: {
                    'afterrender': function(){
                        Ext.getCmp('app-center').header.addCls('app-center-header');
                    }
                },
                items: [{
                    id:'app-west',
                    region: 'west',
                    width: 210,
                    border: false,
                    items: [{
                        xtype: 'datepicker',
                        id: 'app-nav-picker',
                        cls: 'ext-cal-nav-picker',
                        listeners: {
                            'select': {
                                fn: function(dp, dt){
                                    Ext.getCmp('app-calendar').setStartDate(dt);
                                },
                                scope: this
                            }
                        }
                    },{
                        xtype: 'extensible.calendarlist',
                        store: this.calendarStore,
                        border: false,
                        width: 210
                    }]
                },{
                    xtype: 'extensible.calendarpanel',
                    eventStore: this.eventStore,
                    calendarStore: this.calendarStore,
                    border: false,
                    id:'app-calendar',
                    region: 'center',
                    activeItem: 3, // month view
                    
                    // Any generic view options that should be applied to all sub views:
                    viewConfig: {
                        //enableFx: false,
                        //ddIncrement: 10, //only applies to DayView and subclasses, but convenient to put it here
                        //viewStartHour: 6,
                        //viewEndHour: 18,
                        //minEventDisplayMinutes: 15
                        showTime: false
                    },
                    
                    // View options specific to a certain view (if the same options exist in viewConfig
                    // they will be overridden by the view-specific config):
                    monthViewCfg: {
                        showHeader: true,
                        showWeekLinks: true,
                        showWeekNumbers: true
                    },
                    
                    multiWeekViewCfg: {
                        //weekCount: 3
                    },
                    
                    // Some optional CalendarPanel configs to experiment with:
                    //readOnly: true,
                    //showDayView: false,
                    //showMultiDayView: true,
                    //showWeekView: false,
                    //showMultiWeekView: false,
                    //showMonthView: false,
                    //showNavBar: false,
                    //showTodayText: false,
                    //showTime: false,
                    //editModal: true,
                    //enableEditDetails: false,
                    //title: 'My Calendar', // the header of the calendar, could be a subtitle for the app
                    
                    listeners: {
                        'eventclick': {
                            fn: function(vw, rec, el){
                                this.clearMsg();
                            },
                            scope: this
                        },
                        'eventover': function(vw, rec, el){
                            //console.log('Entered evt rec='+rec.data[Extensible.calendar.data.EventMappings.Title.name]', view='+ vw.id +', el='+el.id);
                        },
                        'eventout': function(vw, rec, el){
                            //console.log('Leaving evt rec='+rec.data[Extensible.calendar.data.EventMappings.Title.name]+', view='+ vw.id +', el='+el.id);
                        },
                        'eventadd': {
                            fn: function(cp, rec){
                                this.showMsg('Evento '+ rec.data[Extensible.calendar.data.EventMappings.Title.name] +' foi adicionado com sucesso.');
                            },
                            scope: this
                        },
                        'eventupdate': {
                            fn: function(cp, rec){
                                this.showMsg('Event '+ rec.data[Extensible.calendar.data.EventMappings.Title.name] +' was updated');
                            },
                            scope: this
                        },
                        'eventdelete': {
                            fn: function(cp, rec){
                                this.showMsg('Event '+ rec.data[Extensible.calendar.data.EventMappings.Title.name] +' was deleted');
                            },
                            scope: this
                        },
                        'eventcancel': {
                            fn: function(cp, rec){
                                
                            },
                            scope: this
                        },
                        'viewchange': {
                            fn: function(p, vw, dateInfo){
                                if(dateInfo){
                                    this.updateTitle(dateInfo.viewStart, dateInfo.viewEnd);
                                }
                            },
                            scope: this
                        },
                        'dayclick': {
                            fn: function(vw, dt, ad, el){
                                this.clearMsg();
                            },
                            scope: this
                        },
                        'rangeselect': {
                            fn: function(vw, dates, onComplete){
                                this.clearMsg();
                            },
                            scope: this
                        },
                        'eventmove': {
                            fn: function(vw, rec){
                                var mappings = Extensible.calendar.data.EventMappings,
                                    time = rec.data[mappings.IsAllDay.name] ? '' : ' \\a\\t g:i a';
                                
                                rec.commit();
                                
                                this.showMsg('Event '+ rec.data[mappings.Title.name] +' was moved to '+
                                    Ext.Date.format(rec.data[mappings.StartDate.name], ('F jS'+time)));
                            },
                            scope: this
                        },
                        'eventresize': {
                            fn: function(vw, rec){
                                rec.commit();
                                this.showMsg('Event '+ rec.data[Extensible.calendar.data.EventMappings.Title.name] +' was updated');
                            },
                            scope: this
                        },
                        'eventdelete': {
                            fn: function(win, rec){
                                this.eventStore.remove(rec);
                                this.showMsg('Event '+ rec.data[Extensible.calendar.data.EventMappings.Title.name] +' was deleted');
                            },
                            scope: this
                        },
                        'initdrag': {
                            fn: function(vw){
                                // do something when drag starts
                            },
                            scope: this
                        }
                    }
                }]
            }]
        },config)]);
    },
        
    updateTitle: function(startDt, endDt){
        var p = Ext.getCmp('app-center'),
            fmt = Ext.Date.format;
        
        if(Ext.Date.clearTime(startDt).getTime() == Ext.Date.clearTime(endDt).getTime()){
            p.setTitle(fmt(startDt, 'F j, Y'));
        }
        else if(startDt.getFullYear() == endDt.getFullYear()){
            if(startDt.getMonth() == endDt.getMonth()){
                p.setTitle(fmt(startDt, 'F j') + ' - ' + fmt(endDt, 'j, Y'));
            }
            else{
                p.setTitle(fmt(startDt, 'F j') + ' - ' + fmt(endDt, 'F j, Y'));
            }
        }
        else{
            p.setTitle(fmt(startDt, 'F j, Y') + ' - ' + fmt(endDt, 'F j, Y'));
        }
    },
    
    showMsg: function(msg){
    	AboutUs.util.NotificationUtil.showNotificationInfo(msg);
    	this.down('[id=app-calendar]').getActiveView().refresh(true);
        //Ext.fly('app-msg').update(msg).removeCls('x-hidden');
    },
    clearMsg: function(){
        //Ext.fly('app-msg').update('').addCls('x-hidden');
    }
    
});