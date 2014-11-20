Ext.define('AboutUs.view.calendar.Dialog', {
    extend: 'AboutUs.view.common.Dialog',
    
    alias: 'widget.eventdialog',
    
    titleAdd: 'Novo Evento',
    titleUpdate: 'Detalhes do evento: {Title}',
    
    icon:'resources/images/calendar.png',
    
    width:700,
    height:300,
    
    controller: 'CalendarController',
    
    closeAction: 'hide',
    
    layout:'fit',
    
    initComponent: function(){
    	
    	var me = this;
    	
    	 this.addEvents({
            eventadd: true,
            eventupdate: true,
            eventdelete: true,
            eventcancel: true
        });
    	
    	Ext.apply(me, {
        	items:[{
        		xtype:'commonform',
		    	items:[{
		    		xtype: 'tabpanel',
		    		activeTab: 0,
				    deferredRender:false,
				    items:[{
				    	xtype:'panel',
				    	title: 'Detalhes',
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
					            fieldLabel: 'O quê',
					            anchor: '100%'
					        },{
					            xtype: 'extensible.daterangefield',
					            itemId: this.id + '-dates',
					            name: 'dates',
					            anchor: '95%',
					            allDayText: 'Todo o dia',
					            toText: 'até',
					            dateFormat:'d/m/Y',
					            timeFormat:'G:i',
					            singleLine: true,
					            fieldLabel: 'Quando'
					        },{
					        	xtype: 'textfield',
					        	itemId: this.id + '-loc',
					        	name: Extensible.calendar.data.EventMappings.Location.name,
					        	fieldLabel: 'Onde',
					        	anchor: '100%'
					        },{
					        	xtype     : 'fieldcontainer',
					        	fieldLabel: 'Repetir...',
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
					            	itemId: this.id + '-repeatLabel'
					            },{
					            	xtype:'button',
					            	hidden:true,
					            	itemId: this.id + '-repeatButton',
					            	text:'Edit',
					            	handler:this.onEditRepeatClick,
					            	scope: this
					            }]
					        },{
					        	xtype: 'extensible.calendarcombo',
					            itemId: this.id + '-calendar',
					            name: Extensible.calendar.data.EventMappings.CalendarId.name,
					            anchor: '100%',
					            fieldLabel: 'Calendário',
					            store: this.calendarStore,
					            listeners:{
									select: {
					        			fn: this.onCalendarSelect,
					        			scope: this
					       			}
								}
					        },{
					        	xtype:'categorycombo',
					        	itemId: this.id + '-category',
					        	fieldLabel: 'Categoria',
					        	name: Extensible.calendar.data.EventMappings.CategoryId.name,
					        	anchor: '100%',
					        	hidden:true
				        	},{
					        	xtype: 'thumbfield',
						        fieldLabel: 'Miniatura',
						        itemId: this.id + '-thumb',
						        name: Extensible.calendar.data.EventMappings.ThumbId.name,
						        anchor: '100%',
						        hidden:true
					        },{
					        	xtype: 'checkbox',
					        	itemId: this.id + '-published',
					        	fieldLabel: 'Publicado',
					        	name: Extensible.calendar.data.EventMappings.Published.name,
					        	inputValue: 'true',
					        	anchor: '100%',
					        	hidden:true
					        }]
					    }]
				    },{
				    	xtype:'panel',
				    	title:'Descrição',
					    layout:{
					    	type:'hbox',
					    	align:'stretchmax'
					    },
					   	items:[{
					    	xtype     : 'htmleditor',
					    	emptyText : 'Digita aqui a descrição detalhada do evento',
					        name      : 'description'
					    }]
					    
				    }]
		    	}]
        	}]
		});
    	
    	this.callParent(arguments);
    },
    
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
				this.setTitle(this.titleAdd);
			}
			else{
				var tpl = new Ext.XTemplate(this.titleUpdate);
				this.setTitle(tpl.apply(rec.data))
			}
            
			f.reset();
            f.loadRecord(rec);
            
        }
        else{
			//this.isAdd = true;
            this.setTitle(this.titleAdd);

            var start = o[M.StartDate.name],
                end = o[M.EndDate.name] || Extensible.Date.add(start, {hours: 1});
                
            rec = Ext.create('Extensible.calendar.data.EventModel');
            //rec.data[M.EventId.name] = this.newId++;
            rec.data[M.StartDate.name] = start;
            rec.data[M.EndDate.name] = end;
            rec.data[M.Separation.name] = 1;
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
        
        this.onCalendarSelect(this.calendarField);
        var frequency = rec.get(Extensible.calendar.data.EventMappings.Frequency.name);
		if (frequency != "" && frequency != 'once'){
			this.checkRepeatField.setValue(true);
		}else{
			this.checkRepeatField.setValue(false);
		}
        
		return this;
    },
    
    afterRender: function(){
        this.callParent(arguments);
		
        this.initRefs();
    },
    
    initRefs: function() {
        // toolbar button refs
        /*this.saveButton = this.down('#' + this.id + '-save-btn');
        this.deleteButton = this.down('#' + this.id + '-delete-btn');
        this.cancelButton = this.down('#' + this.id + '-cancel-btn');
        this.detailsButton = this.down('#' + this.id + '-details-btn');*/
    	this.formPanel = this.down('commonform');
        
        // form item refs
        this.titleField = this.down('#' + this.id + '-title');
        this.dateRangeField = this.down('#' + this.id + '-dates');
        this.calendarField = this.down('#' + this.id + '-calendar');
        this.checkRepeatField = this.down('#' + this.id + '-repeat');
        this.checkRepeatLabel = this.down('#' + this.id + '-repeatLabel');
        this.checkRepeatButton = this.down('#' + this.id + '-repeatButton');
        
        //site fields
        this.categoryField = this.down('#' + this.id + '-category');
        this.thumbField = this.down('#' + this.id + '-thumb');
        this.publishedField = this.down('#' + this.id + '-published');
    },
    
    onCalendarSelect: function(combo,records,eOpts){
    	if (combo.getValue()=='2'){
    		this.categoryField.setVisible(true);
        	this.thumbField.setVisible(true);
        	this.publishedField.setVisible(true);
        	this.setHeight(480);
    	}else{
    		this.categoryField.setVisible(false);
        	this.thumbField.setVisible(false);
        	this.publishedField.setVisible(false);
        	this.setHeight(300);
    	}
    },
    
    changeRepeatCheckBox: function(checkbox, newValue, oldValue){
    	var frequency = this.activeRecord.get(Extensible.calendar.data.EventMappings.Frequency.name);
    	if (checkbox.getValue() && frequency == ""){
    		this.openEventWinRepeat();
    	}else{
    		this.checkRepeatButton.show();
    		this.checkRepeatLabel.setValue(this.getSummaryLabel(this.activeRecord));
    	}
    	
    	if (!checkbox.getValue()){
    		this.checkRepeatButton.hide();
    		this.checkRepeatLabel.setValue('');
    	}
    },
    
    onEditRepeatClick: function(button){
   		this.openEventWinRepeat();
    },
    
    openEventWinRepeat:function(){
    	if(!this.eventWinRepeat){
			this.eventWinRepeat = Ext.create('Extensible.calendar.form.EventWindowRepeat',{
				eventWindow: this
			});
		}
		this.eventWinRepeat.show(this.activeRecord, this.dateRangeField.getValue()[0]);
    },
    
    completeRepeatEdit:function(){
    	if (this.activeRecord.get(Extensible.calendar.data.EventMappings.Frequency.name)){
    		this.checkRepeatButton.show();
    		this.checkRepeatLabel.setValue(this.getSummaryLabel(this.activeRecord));
    		this.checkRepeatField.setValue(true);
    	}else{
    		this.checkRepeatButton.hide();
    		this.checkRepeatLabel.setValue('');
    		this.checkRepeatField.setValue(false);
    	}
    },
    
     getSummaryLabel:function(rec){
	
		var result = "";
		
		var M = Extensible.calendar.data.EventMappings;
		
		var frequency = rec.get(M.Frequency.name);
		var separation = rec.get(M.Separation.name);
		var weekdays = rec.get(M.WeekDays.name);
		var count = rec.get(M.Count.name);
		var until = rec.get(M.Until.name);
		
		if (frequency == 'daily'){
			
			if (separation == 1){
				result = "Todos os dias";
			}else{
				result = "A cada " + separation + " dias";
			}
			
			if (count > 0){
				result = result + ", " + count + " vezes.";
			}else if (until){
				result = result + ", até " + Ext.util.Format.date(until,'d-m-Y') + ".";
			}
		
		}
		
		if (frequency == 'weekly'){
			
			if (separation == 1){
				result = "Semanal: toda ";
			}else{
				result = "A cada "+separation+ " semanas";
			}
			
			if (weekdays && !Ext.isEmpty(weekdays)){
				Ext.Array.forEach(weekdays, function(day, index, allItems) {
					result = result + Tradutor['calendarWeekday'+day];
	            	if (index + 1 != allItems.length){
	            		result = result + ",";
	            	}
	        	});
			}
			
			if (count > 0){
				result = result + ", " + count + " vezes.";
			}else if (until){
				result = result + ", until " + Ext.util.Format.date(until,'d-m-Y') + ".";
			}
		
		}
		
		return result;
	
    },
    
    updateRecord: function(record, keepEditing) {
        var fields = record.fields,
            values = this.formPanel.getForm().getValues(),
            name,
            M = Extensible.calendar.data.EventMappings,
            obj = {};

        fields.each(function(f) {
            name = f.name;
            if (name in values) {
                obj[name] = values[name];
            }
        });
        
        var dates = this.dateRangeField.getValue();
        obj[M.StartDate.name] = dates[0];
        obj[M.EndDate.name] = dates[1];
        obj[M.IsAllDay.name] = dates[2];

        record.beginEdit();
        record.set(obj);
        
        if (!keepEditing) {
            record.endEdit();
        }

        return this;
    },
    
    // private
    onSave: function(){
    	if (this.activeRecord.get("WeekDays")==""){
    		this.activeRecord.set("WeekDays",null);
    	}
        if(!this.formPanel.form.isValid()){
            return;
        }
		if(!this.updateRecord(this.activeRecord)){
			this.onCancel();
			return;
		}
		this.fireEvent(this.activeRecord.phantom ? 'eventadd' : 'eventupdate', this, this.activeRecord, this.animateTarget);
    }
});