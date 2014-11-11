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
		title: 'Repetir',
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
				fieldLabel: 'Repete-se',
				id:'comboRepeat',
				anchor: '100%',
				displayField: 'text',
		    	valueField: 'value',
		    	value:'daily',
				store: Ext.create('Ext.data.Store', {
					fields: ['text', 'value'],
					data : [
						{"text":"Todos os dias", "value":"daily"},
						{"text":"Semanal", "value":"weekly"}/*,
						{"text":"Monthly", "value":"monthly"},
						{"text":"Annualy", "value":"annually"}*/
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
		            	fieldLabel: 'Repete todos os(as)',
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
		            	fieldLabel: 'Repetir no(a)',
		            	id: 'daysOfWeek',
		            	defaultType: 'checkboxfield',
		            	layout: {
		            		type: 'hbox',
		            		defaultMargins:{
						right: 5
					}
		            	},
		            	items: [{
		                    boxLabel  : 'D',
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
		                    boxLabel  : 'S',
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
		                    boxLabel  : 'Q',
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
		                    boxLabel  : 'Q',
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
		                    boxLabel  : 'S',
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
				xtype: 'displayfield',
				fieldLabel: 'Tem início às',
				anchor: '100%',
				id:'startOn'
			},{
				xtype: 'fieldcontainer',
				anchor: '100%',
		            	fieldLabel: 'Termina no dia',
		            	defaultType: 'fieldcontainer',
		            	layout: 'vbox',
		            	items: [{
		                    boxLabel  : 'Nunca',
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
		                    	boxLabel  : 'Após',
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
		                    	value:'ocorrências'
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
		                    	boxLabel  : 'No dia',
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
				fieldLabel: 'Resumo',
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
    	this.down('[id=startOn]').setValue(Ext.Date.format(starton,'d-m-Y'));
    	
    	this.activeRecord = rec;
    	
    	this.activeRecord.beginEdit();
    	
    	this.onRepeatComboSelect(this.down('[id=comboRepeat]'));
    	
    	this.callParent();
    	return this;
    },
    
    onCancelRepeatWin: function(button){
    	this.activeRecord.cancelEdit();
    	//if (this.eventWindow.activeRecord.get(Extensible.calendar.data.EventMappings.Frequency.name)==""){
    		//this.eventWindow.checkRepeatField.setValue(false);
    	//}
    	this.eventWindow.completeRepeatEdit();
    	this.close();
    },
    
    onSaveRepeatWin: function(button){
    	//this.activeRecord.set(Extensible.calendar.data.EventMappings.Frequency.name,this.down('[id=comboRepeat]').getValue());
    	this.activeRecord.endEdit();
    	this.eventWindow.completeRepeatEdit();
    	this.close();
    },
    
    onRepeatComboSelect: function(combo,records,eOpts){
    	
    	this.down('[id=daysOfWeek]').setVisible(false);
    	
    	if (combo.getValue()=='daily'){
    		this.down('[id=repeatEveryLabel]').setValue('dias');
    	}else if(combo.getValue()=='weekly'){
    		this.down('[id=repeatEveryLabel]').setValue('semanas');
    		this.down('[id=daysOfWeek]').setVisible(true);
    	}else if(combo.getValue()=='monthly'){
    		this.down('[id=repeatEveryLabel]').setValue('meses');
    	}else if(combo.getValue()=='annually'){
    		this.down('[id=repeatEveryLabel]').setValue('anos');
    	}
    	
    	this.updateSummaryField();
    	
    },
    
    updateRecord : function(){
    	
    	var endOn = this.down('[id=radio1]').getGroupValue();
    	var rec = this.activeRecord;
    	
    	rec.set(M.Frequency.name,this.down('[id=comboRepeat]').getValue());
		rec.set(M.Separation.name,this.down('[id=repeatEvery]').getValue());
		
		//WeekDays
		if (rec.get(M.Frequency.name)=="weekly"){
			var weekDays = new Array();
			if (this.getChkWeekDay('chkSun').getValue()){
				weekDays.push(0);
			}
			if (this.getChkWeekDay('chkMon').getValue()){
				weekDays.push(1);
			}
			if (this.getChkWeekDay('chkTue').getValue()){
				weekDays.push(2);
			}
			if (this.getChkWeekDay('chkWed').getValue()){
				weekDays.push(3);
			}
			if (this.getChkWeekDay('chkThu').getValue()){
				weekDays.push(4);
			}
			if (this.getChkWeekDay('chkFri').getValue()){
				weekDays.push(5);
			}
			if (this.getChkWeekDay('chkSat').getValue()){
				weekDays.push(6);
			}
			rec.set(M.WeekDays.name,weekDays);
		}
		
		rec.set(M.Count.name,undefined);
		rec.set(M.Until.name,undefined);
		if (endOn== '1'){
			rec.set(M.Count.name,this.down('[id=endsOnOcurrences]').getValue());
		}else if (endOn== '2'){
			rec.set(M.Until.name, this.down('[id=endsOnDate]').getValue());
		}
		
		
    },
    
    updateSummaryField:function(){
    	
    	if (this.activeRecord){
	
    		this.updateRecord();
    	
			var summary = this.eventWindow.getSummaryLabel(this.activeRecord);
		
			this.down('[id=summaryField]').setValue(summary);
			
    	}
	
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