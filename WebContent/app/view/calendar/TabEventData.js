Ext.define('AboutUs.view.calendar.TabEventData', {
    extend: 'Ext.panel.Panel',
    
    alias: 'widget.tabeventdata',
    
    requires:[],
    
    title:'Dados',
    
    closable:false,
    
    items:[{
        layout: 'form',
        bodyPadding: 10,
        fieldDefaults: {
            msgTarget: 'side',
            labelWidth: 75
        },
        defaultType: 'textfield',
        items: [{
            xtype: 'textfield',
            itemId: this.id + '-title',
            name: Extensible.calendar.data.EventMappings.Title.name,
            fieldLabel: 'What',
            anchor: '100%'
        },{
            xtype: 'extensible.daterangefield',
            itemId: this.id + '-dates',
            name: 'dates',
            anchor: '95%',
            singleLine: true,
            fieldLabel: 'When'
        },{
        	xtype: 'textfield',
        	itemId: this.id + '-loc',
        	name: Extensible.calendar.data.EventMappings.Location.name,
        	fieldLabel: 'Where',
        	anchor: '100%'
        },{
        	xtype     : 'fieldcontainer',
        	fieldLabel: 'Repeat',
		    layout: {
    			type: 'hbox',
            	defaultMargins:{
					right: 5
				}
    	    },
            items     : [{
            	xtype: 'checkbox',
            	itemId: this.id + '-repeat',
            	listeners:{
	        		change:{
	        			fn:this.changeRepeatCheckBox,
	        			scope:this
	        		}
	        	}
            },{
            	xtype:'displayfield',
            	value:'Daily'
            },{
            	xtype:'button',
            	text:'Edit'
            }]
        },{
        	xtype: 'extensible.calendarcombo',
            itemId: this.id + '-calendar',
            name: Extensible.calendar.data.EventMappings.CalendarId.name,
            anchor: '100%',
            fieldLabel: 'Calendar',
            store: AboutUs.app.getStore('Extensible.calendar.data.MemoryCalendarStore'),
            listeners:{
				select: {
        			fn: this.onCalendarSelect,
        			scope: this
       			}
			}
        }]
    }]
    
    
});