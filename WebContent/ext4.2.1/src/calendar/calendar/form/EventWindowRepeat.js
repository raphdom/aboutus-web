/**
 * @class Ext.calendar.form.EventWindow
 * @extends Ext.Window
 * <p>A custom window containing a basic edit form used for quick editing of events.</p>
 * <p>This window also provides custom events specific to the calendar so that other calendar components can be easily
 * notified when an event has been edited via this component.</p>
 * @constructor
 * @param {Object} config The config object
 */
Ext.define('Extensible.calendar.form.EventWindowRepeat', {
    extend: 'Ext.window.Window',
    alias: 'widget.eventeditwindowrepeat',
   
    
    
    constructor: function(config) {
    
    	this.callParent([Ext.apply({
    	
    	width: 450,
		closeAction: 'hide',
		closable:false,
		modal: true,
		resizable: false,
		title: 'Repeat Event',
    		items:[{
		    	xtype: 'form',
			fieldDefaults: {
				msgTarget: 'side',
				labelWidth: 100
			},
			frame: false,
			bodyStyle: 'background:transparent;padding:5px 10px 10px;',
			bodyBorder: false,
			border: false,
			items: [{
				xtype: 'combo',
				fieldLabel: 'Repeats',
				id:'comboRepeat',
				anchor: '100%',
				displayField: 'text',
		    		valueField: 'value',
		    		value:'daily',
				store: Ext.create('Ext.data.Store', {
					fields: ['text', 'value'],
					data : [
						{"text":"Daily", "value":"daily"},
						{"text":"Weekly", "value":"weekly"},
						{"text":"Monthly", "value":"monthly"},
						{"text":"Annualy", "value":"annually"}
					]
				}),
				listeners:{
					select: {
                        			fn: this.onRepeatComboSelect,
                        			scope: this
                       			}
				}
			},{
				xtype: 'fieldcontainer',
				anchor: '100%',
		            	fieldLabel: 'Repeat every',
		            	layout: {
		            		type: 'hbox',
		            		defaultMargins:{
						right: 5
					}
		            	},
		            	items: [{
		            		xtype: 'numberfield',
		                    	name: 'repeatEvery',
		                    	value: 1,
		                    	editable: false,
		                    	minValue: 1,
		                    	maxValue: 30,
		                    	id:'repeatEvery',
		                    	listeners :{
			                    	change:{
			                    		fn: this.updateSummaryField,
			                    		scope: this
			                    	}
			                }
		                },{
					xtype: 'displayfield',
					value: 'weeks',
					id: 'repeatEveryLabel'
		                }]
			},{
				xtype: 'fieldcontainer',
				anchor: '100%',
		            	fieldLabel: 'Repeat',
		            	id: 'daysOfWeek',
		            	defaultType: 'checkboxfield',
		            	layout: {
		            		type: 'hbox',
		            		defaultMargins:{
						right: 5
					}
		            	},
		            	items: [{
		                    boxLabel  : 'S',
		                    name      : 'repeatWeekly',
		                    inputValue: '0',
		                    id        : 'chkSun',
		                    listeners :{
		                    	change:{
		                    		fn: this.changeRepeatWeekDay,
		                    		scope: this
		                    	}
		                    }
		                },{
		                    boxLabel  : 'M',
		                    name      : 'repeatWeekly',
		                    inputValue: '1',
		                    id        : 'chkMon',
		                    listeners :{
		                    	change:{
		                    		fn: this.changeRepeatWeekDay,
		                    		scope: this
		                    	}
		                    }
		                },{
		                    boxLabel  : 'T',
		                    name      : 'repeatWeekly',
		                    inputValue: '2',
		                    id        : 'chkTue',
		                    listeners :{
		                    	change:{
		                    		fn: this.changeRepeatWeekDay,
		                    		scope: this
		                    	}
		                    }
		                },{
		                    boxLabel  : 'W',
		                    name      : 'repeatWeekly',
		                    inputValue: '3',
		                    id        : 'chkWed',
		                    listeners :{
		                    	change:{
		                    		fn: this.changeRepeatWeekDay,
		                    		scope: this
		                    	}
		                    }
		                },{
		                    boxLabel  : 'T',
		                    name      : 'repeatWeekly',
		                    inputValue: '4',
		                    id        : 'chkThu',
		                    listeners :{
		                    	change:{
		                    		fn: this.changeRepeatWeekDay,
		                    		scope: this
		                    	}
		                    }
		                },{
		                    boxLabel  : 'F',
		                    name      : 'repeatWeekly',
		                    inputValue: '5',
		                    id        : 'chkFri',
		                    listeners :{
		                    	change:{
		                    		fn: this.changeRepeatWeekDay,
		                    		scope: this
		                    	}
		                    }
		                },{
		                    boxLabel  : 'S',
		                    name      : 'repeatWeekly',
		                    inputValue: '6',
		                    id        : 'chkSat',
		                    listeners :{
		                    	change:{
		                    		fn: this.changeRepeatWeekDay,
		                    		scope: this
		                    	}
		                    }
		                }]
			},{
				xtype: 'textfield',
				fieldLabel: 'Start on',
				anchor: '100%',
				id:'startOn',
				disabled:true
			},{
				xtype: 'fieldcontainer',
				anchor: '100%',
		            	fieldLabel: 'End on',
		            	defaultType: 'fieldcontainer',
		            	layout: 'vbox',
		            	items: [{
		                    boxLabel  : 'Always',
		                    xtype     : 'radiofield',
		                    name      : 'endOn',
		                    checked: true,
		                    inputValue: '0',
		                    id        : 'radio1',
		                    listeners :{
		                    	change:{
		                    		fn: this.changeEndOn,
		                    		scope: this
		                    	}
		                    }
		                },{
		                    xtype     : 'fieldcontainer',
				    layout: {
		            		type: 'hbox',
		            		defaultMargins:{
						right: 5
					}
		            	    },
		                    items     : [{
		                    	xtype     : 'radiofield',
		                    	name      : 'endOn',
		                    	boxLabel  : 'After',
		                    	inputValue: '1',
		                    	id        : 'radio2',
		                    	listeners :{
			                    	change:{
			                    		fn: this.changeEndOn,
			                    		scope: this
			                    	}
			                }
		                    },{
		                    	xtype:'numberfield',
		                    	editable: false,
		                    	disabled: true,
		                    	minValue: 1,
		                    	id:'endsOnOcurrences',
		                    	width: 50,
		                    	value:1,
		                    	listeners :{
			                    	change:{
			                    		fn: this.updateSummaryField,
			                    		scope: this
			                    	}
			                }
		                    },{
		                    	xtype:'displayfield',
		                    	value:'ocurrence(s)'
		                    }]
		                },{
		                    xtype     : 'fieldcontainer',
				    layout: {
		            		type: 'hbox',
		            		defaultMargins:{
						right: 5
					}
		            	    },
		                    items     : [{
		                    	xtype     : 'radiofield',
		                    	name      : 'endOn',
		                    	boxLabel  : 'On',
		                    	inputValue: '2',
		                    	id        : 'radio3',
		                    	listeners :{
			                    	change:{
			                    		fn: this.changeEndOn,
			                    		scope: this
			                    	}
			                }
		                    },{
		                    	xtype:'datefield',
		                    	disabled: true,
		                    	id:'endsOnDate'
		                    }]
		                }]
			},{
				xtype: 'displayfield',
				fieldLabel: 'Summary',
				anchor: '100%',
				value: 'Toda segunda-feira',
				id: 'summaryField'
			}]
		    }],
		    
		    buttons:[{
		    	text:'Concluido',
		    	handler:this.onSaveRepeatWin,
		    	scope: this
		    },{
		    	text:'Descartar',
		    	handler:this.onCancelRepeatWin,
		    	scope: this
		    }]
    	},config)]);
    	
    	this.updateSummaryField();
    
    },
    
    show: function(rec, starton){
    	this.down('[id=startOn]').setValue(starton);
    	
    	this.activeRecord = rec;
    	
    	this.activeRecord.beginEdit();
    	
    	this.callParent();
    	return this;
    },
    
    onCancelRepeatWin: function(button){
    	this.activeRecord.cancelEdit();
    	if (this.eventWindow.activeRecord.get(Extensible.calendar.data.EventMappings.Frequency.name)==""){
    		this.eventWindow.checkRepeatField.setValue(false);
    	}
    	this.close();
    },
    
    onSaveRepeatWin: function(button){
    	this.activeRecord.set(Extensible.calendar.data.EventMappings.Frequency.name,this.down('[id=comboRepeat]').getValue());
    	this.activeRecord.endEdit();
    	this.close();
    },
    
    onRepeatComboSelect: function(combo,records,eOpts){
    	
    	this.down('[id=daysOfWeek]').setVisible(false);
    	
    	if (combo.getValue()=='daily'){
    		this.down('[id=repeatEveryLabel]').setValue('days');
    	}else if(combo.getValue()=='weekly'){
    		this.down('[id=repeatEveryLabel]').setValue('weeks');
    		this.down('[id=daysOfWeek]').setVisible(true);
    	}else if(combo.getValue()=='monthly'){
    		this.down('[id=repeatEveryLabel]').setValue('months');
    	}else if(combo.getValue()=='annually'){
    		this.down('[id=repeatEveryLabel]').setValue('years');
    	}
    	
    	this.updateSummaryField();
    	
    },
    
    updateSummaryField:function(){
	
	var result = "";
	
	var frequency = this.down('[id=comboRepeat]').getValue();
	var repeatEvery = this.down('[id=repeatEvery]').getValue();
	
	var endOn = this.down('[id=radio1]').getGroupValue();
	
	if (frequency == 'daily'){
		
		if (repeatEvery == 1){
			result = "Every day";
		}else{
			result = "To each "+repeatEvery+ " days";
		}
		
		if (endOn== '1'){
			result = result + ", " + this.down('[id=endsOnOcurrences]').getValue() + " times.";
		}else if (endOn== '2'){
			result = result + ", until " + Ext.util.Format.date(this.down('[id=endsOnDate]').getValue(),'d-m-Y') + ".";
		}
	
	}
	
	if (frequency == 'weekly'){
		
		if (repeatEvery == 1){
			result = "Weekly: every ";
		}else{
			result = "To each "+repeatEvery+ " weeks";
		}
		
		if (this.getChkWeekDay('chkSun').getValue()){
			result = result + "Sunday";
		}
		
		if (this.getChkWeekDay('chkMon').getValue()){
			result = result + ",Monday";
		}
		
		if (this.getChkWeekDay('chkTue').getValue()){
			result = result + ",Tuesday";
		}
		
		if (endOn== '1'){
			result = result + ", " + this.down('[id=endsOnOcurrences]').getValue() + " times.";
		}else if (endOn== '2'){
			result = result + ", until " + Ext.util.Format.date(this.down('[id=endsOnDate]').getValue(),'d-m-Y') + ".";
		}
	
	}
	
	this.down('[id=summaryField]').setValue(result);
	
    },
    
    changeEndOn: function (radio,newValue,oldValue,eOpts){
    	if (!radio.getValue()){
    		this.down('[id=endsOnOcurrences]').setDisabled(true);
    		this.down('[id=endsOnDate]').setDisabled(true);
	    	if (radio.getGroupValue()=='0'){
	    	
	    	}else if (radio.getGroupValue()=='1'){
	    		this.down('[id=endsOnOcurrences]').setDisabled(false);
	    	}else if(radio.getGroupValue()=='2'){
	    		this.down('[id=endsOnDate]').setDisabled(false);
	    	}
	    	this.updateSummaryField();
    	}
    	
    },
    
    changeRepeatWeekDay: function (checkbox,newValue,oldValue,eOpts){
	if (!this.getChkWeekDay('chkSun').getValue() &&
		!this.getChkWeekDay('chkMon').getValue() &&
		!this.getChkWeekDay('chkTue').getValue() &&
		!this.getChkWeekDay('chkWed').getValue() &&
		!this.getChkWeekDay('chkThu').getValue() &&
		!this.getChkWeekDay('chkFri').getValue() &&
		!this.getChkWeekDay('chkSat').getValue()){
		
		this.getChkWeekDay('chkSun').setValue(true);
		
	}
	
	this.updateSummaryField();
    },
    
    getChkWeekDay :function(id){
    	return this.down('[id='+id+']')
    }
    
    
});