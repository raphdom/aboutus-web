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
    
    initComponent: function(){
    	
    	var me = this;
    	
    	Ext.apply(me, {
        	items:[{
        		xtype:'commonform',
		    	items:[{
		    		xtype: 'tabpanel',
		    		activeTab: 0,
				    deferredRender:false,
				    items:[{
				    	xtype:'panel',
				    	title: 'Event',
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
					            	hidden:true,
					            	text:'Edit'
					            }]
					        },{
					        	xtype: 'extensible.calendarcombo',
					            itemId: this.id + '-calendar',
					            name: Extensible.calendar.data.EventMappings.CalendarId.name,
					            anchor: '100%',
					            fieldLabel: 'Calendar',
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
					        	fieldLabel: 'Category',
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
					        	fieldLabel: 'Published',
					        	name: Extensible.calendar.data.EventMappings.Published.name,
					        	anchor: '100%',
					        	hidden:true
					        }]
					    }]
				    },{
				    	xtype:'panel',
				    	title:'Description',
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
				this.setTitle(this.title);
			}
			else{
				this.setTitle(this.titleTextEdit);
			}
            
            f.loadRecord(rec);
        }
        else{
			//this.isAdd = true;
            this.setTitle(this.title);

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
    	}else{
    		this.categoryField.setVisible(false);
        	this.thumbField.setVisible(false);
        	this.publishedField.setVisible(false);
    	}
    },
    
    changeRepeatCheckBox: function(checkbox, newValue, oldValue){
    	if (checkbox.getValue()){
    		if(!this.eventWinRepeat){
    			this.eventWinRepeat = Ext.create('Extensible.calendar.form.EventWindowRepeat',{
    				eventWindow: this
    			});
    		}
    		this.eventWinRepeat.show(this.activeRecord);
    	}
    }
    
});