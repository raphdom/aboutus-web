Ext.define('AboutUs.view.calendar.Dialog', {
    extend: 'AboutUs.view.common.Dialog',
    
    alias: 'widget.eventdialog',
    
    title: 'Novo Event',
    titleUpdate: 'Detalhes do event: {title}',
    
    icon:'resources/images/calendar.png',
    
    width:700,
    height:300,
    
    closeAction: 'hide',
    
    layout:'fit',
    
    items:[{
    	xtype:'commonform',
    	items:[{
    		xtype: 'eventtabpanel'
    	}]
    }],
    
    show: function(o, animateTarget){
		// Work around the CSS day cell height hack needed for initial render in IE8/strict:
		this.animateTarget = (Ext.isIE8 && Ext.isStrict) ? null : animateTarget,
            M = Extensible.calendar.data.EventMappings;

        this.callParent([this.animateTarget, function(){
            this.titleField.focus(false, 100);
        }, this]);
        
        //this.deleteButton[o.data && o.data[M.EventId.name] ? 'show' : 'hide']();
        
        var rec, f = this.formPanel.form;

        if(o.data){
            rec = o;
			//this.isAdd = !!rec.data[Extensible.calendar.data.EventMappings.IsNew.name];
			if(rec.phantom){
				// Enable adding the default record that was passed in
				// if it's new even if the user makes no changes 
				//rec.markDirty();
				this.setTitle(this.titleTextAdd);
			}
			else{
				this.setTitle(this.titleTextEdit);
			}
            
            f.loadRecord(rec);
        }
        else{
			//this.isAdd = true;
            this.setTitle(this.titleTextAdd);

            var start = o[M.StartDate.name],
                end = o[M.EndDate.name] || Extensible.Date.add(start, {hours: 1});
                
            rec = Ext.create('Extensible.calendar.data.EventModel');
            //rec.data[M.EventId.name] = this.newId++;
            rec.data[M.StartDate.name] = start;
            rec.data[M.EndDate.name] = end;
            rec.data[M.IsAllDay.name] = !!o[M.IsAllDay.name] || start.getDate() != Extensible.Date.add(end, {millis: 1}).getDate();
            
            f.reset();
            f.loadRecord(rec);
        }
        
        if(this.calendarStore){
            this.calendarField.setValue(rec.data[M.CalendarId.name]);
        }
        this.dateRangeField.setValue(rec.data);
        this.activeRecord = rec;
        //this.el.setStyle('z-index', 12000);
        
		return this;
    }
    
});