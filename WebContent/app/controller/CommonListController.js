Ext.define('AboutUs.controller.CommonListController', {
    extend: 'Ext.app.Controller',
    
    views: ['common.List',
    		'common.Dialog',
    		'common.Form',
    		'common.CriteriaContainer'],
    
	requires:[
		'AboutUs.view.component.criteria.TextCriterion',
		'AboutUs.view.component.criteria.NumberCriterion',
		'AboutUs.view.component.criteria.BooleanCriterion',
		'AboutUs.view.component.criteria.DataRangeCriterion',
		'AboutUs.view.component.criteria.ChurchComboCriterion',
		'AboutUs.view.component.criteria.CivilStatusCriterion',
		'AboutUs.view.component.criteria.CountryCriterion',
		'AboutUs.view.component.criteria.MemberTypeCriterion',
		'AboutUs.view.component.field.MultiPersonCombo'
	],
    		
    refs: [{
        ref: 'commonList',
        selector: 'commonlist'
    },{
    	ref: 'commonGrid',
        selector: 'commonlist grid'
    },{
    	ref: 'commonDialog',
        selector: 'commondialog',
        autoCreate:true,
        xtype:'commondialog'
    },{
    	ref: 'commonForm',
        selector: 'commonform'
    },{
    	ref: 'criteriaContainer',
        selector: 'criteriacontainer'
    }],
    
	 init: function() {
	    this.control({
	 		'commonlist button[action=add]': {
				click: this.onAdd
			},
			'commonlist button[action=delete]': {
				click: this.onDelete
			},
			'commonlist button[action=search]': {
				click: this.onDoSearch
			},
			'commonlist splitbutton[action=search] menu menucheckitem': {
				checkchange: this.onSearchCheckField
			},
			'commonlist':{
				editRecord: this.onEdit
			},
	 		'commondialog commonform button[action=save]': {
	 			click: this.onCommonSave
	 		},
	 		'commondialog commonform button[action=cancel]': {
				click: this.onDialogCancel
			}
	    });
	},
	
	getControllerName: function(){
		if (this.getCommonList()){
			return this.getCommonList().controller;
		}else if (this.getCommonDialog()){
			return this.getCommonDialog().controller;
		}else{
			return undefined;
		}
	},
	actualController: function(){
		return this.getController(this.getControllerName());
	},
	
	processActionMenu: function(){
		
		var centerContainer = this.getController('MainController').getMainContainer().down('container[itemId=centerContainer]');
		centerContainer.setLoading(true);
    	centerContainer.removeAll();
    	
	},
	
	onAdd: function(button, event, options) {
		this.actualController().getDialog().show();
    	if (this.actualController().onAfterAdd != undefined){
    		this.actualController().onAfterAdd(button,event,options);	
    	}
    	var record = Ext.create(this.getCommonList().grid.getStore().model.modelName);
    	this.getCommonDialog().down('form').loadRecord(record);
    },
    
    onDialogCancel: function(button, event, options) {
    	button.up('commondialog').close();
    },
    
    onEdit: function(button, record) {
    	var me = this;
    	var listRecord = record;
    	var dialog = me.actualController().getDialog();
    	eval(record.modelName).load(record.get('id'), {
		    scope: this,
		    failure: function(record, operation) {
		    },
		    success: function(record, operation) {
		    	me.getCommonDialog().down('form').loadRecord(record);
		    	var titleUpdate = me.getCommonDialog().titleUpdate;
        		if (titleUpdate != undefined){
        			var tpl = new Ext.XTemplate(titleUpdate);
        			me.getCommonDialog().setTitle(tpl.apply(listRecord.data));	
        		}
		    	if (me.actualController().onGetDataSuccess != undefined){
		    		me.actualController().onGetDataSuccess(record);	
		    	}
		    	dialog.show();
		    },
		    callback: function(record, operation, success) {
		    }
		});
    	
    },
    
    onDelete: function(button, event, options) {
    	var me = this;
    	if (me.getCommonList().grid.getSelectionModel().getSelection().length > 0){
    		Ext.Msg.confirm('Eliminar', 'Deseja realmente eliminar os registos selecionados', 
    			function(btn, text){
			    	if (btn == 'yes'){
						var ids = new Array();
			    		Ext.Array.each(me.getCommonList().grid.getSelectionModel().getSelection(), function(record, index) {
							ids.push(record.getId());
			    		});
			    		Ext.Ajax.request({
						    url: me.getCommonList().grid.getStore().getProxy().api.destroy,
						    headers: {
			                	'Content-Type': 'application/json;'
			                },
						    params: Ext.encode(ids),
						    success: function(response){
						        var response = Ext.decode(response.responseText);
						        AboutUs.util.NotificationUtil.processMessages(response.messages);
						        me.onDoSearch();
						    }
						});
			    	}
			});
    	}else{
    		AboutUs.util.NotificationUtil.showNotificationError("Você deve selecionar um registo.");
    	}
    },
    
    onCommonSave: function(button, event, options) {
    	var me = this;
    	var win = button.up('window'),
            form = win.down('form');
    	if (!form.isValid()){
    		AboutUs.util.NotificationUtil.showNotificationError("Preencha os campos obrigatórios!");
    		return;
    	}
    	form.updateRecord();
    	if (this.getController(this.getControllerName()).onBeforeSaveData != undefined){
    		this.getController(this.getControllerName()).onBeforeSaveData();	
    	}
    	
    	if (this.getController(this.getControllerName()).onSave != undefined){
    		this.getController(this.getControllerName()).onSave(form.getRecord());	
    	}else{
	    	form.getRecord().save({
	    		success: function(record, operation){
	    			win.close();
	    			var response = operation.request.proxy.reader.rawData;
	    			if (response.messages){
	    				AboutUs.util.NotificationUtil.processMessages(response.messages);
	    			}
	        		me.getCommonList().grid.getStore().reload();
		    	},
		    	failure: function(record, operation){
		    		var response = operation.request.proxy.reader.rawData;
		    		AboutUs.util.NotificationUtil.processMessages(response.messages);
		    	}
	    	});
    	}
    },
    
    onDoSearch: function(button, event, options) {
        var store = this.getCommonList().grid.store;
        var form = this.getCriteriaContainer();
        var values = form.getValues();
        var filters = [];
 
        for (var p in values) {
        	var value = values[p];
        	var field =  form.getForm().findField(p);
        	if (value) {
        		filters.push({ property: p, value: value , type: field.criteriaType});
        	}
        }
 
        if (filters.length) {
        	store.clearFilter(true);
        	store.filter(filters);
        } else {
        	store.clearFilter();
        }
    },
    
    onSearchCheckField:function(menuItem, checked, options){
    	var me = this;
    	if (checked){
    		if (!menuItem.criteriaXtype){
    			menuItem.criteriaXtype= 'textcriterion'
    		}
	    	var field = Ext.widget(menuItem.criteriaXtype,{
	    		fieldLabel: menuItem.header,
				name : menuItem.criteriaName,
				width : 400,
				listeners: {
	                specialkey: function(field, e){
	                    if (e.getKey() == e.ENTER) {
	                        me.onDoSearch();
	                    }
	                }
            	}
	    	});
	    	this.getCriteriaContainer().add(field);
    	}else{
    		var field = this.getCriteriaContainer().down('[name='+menuItem.criteriaName+']');
    		this.getCriteriaContainer().remove(field);
    	}
    	if (this.getCriteriaContainer().items.length > 0){
    		this.getCriteriaContainer().setVisible(true);
    	}else{
    		this.getCriteriaContainer().setVisible(false);
    	}
    }
    
});
