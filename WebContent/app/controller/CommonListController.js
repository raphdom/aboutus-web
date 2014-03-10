Ext.define('AboutUs.controller.CommonListController', {
    extend: 'Ext.app.Controller',
    
    views: ['common.List',
    		'common.Dialog',
    		'common.Form',
    		'common.CriteriaContainer'],
    
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
	 		'commonform button[action=save]': {
	 			click: this.onSave
	 		},
	 		'commonform button[action=cancel]': {
				click: this.onDialogCancel
			}
	    });
	},
	
	getControllerName: function(){
		return this.getCommonList().controller;
	},
	actualController: function(){
		return this.getController(this.getControllerName());
	},
	
	processActionMenu: function(){
		
		var centerContainer = this.getController('MainController').getMainContainer().down('container[itemId=centerContainer]');
    	centerContainer.removeAll();
		
	},
	
	onAdd: function(button, event, options) {
		Ext.widget(this.getCommonList().dialog).show();
    	if (this.actualController().onAfterAdd != undefined){
    		this.actualController().onAfterAdd(button,event,options);	
    	}
    	var record = Ext.create(this.getCommonList().grid.getStore().model.modelName);
    	this.getCommonDialog().down('form').loadRecord(record);
    },
    
    onDialogCancel: function(button, event, options) {
    	console.log('CommonController.onDialogCancel()');
    	button.up('commondialog').close();
    },
    
    onEdit: function(button, record) {
    	var me = this;
    	
    	eval(record.modelName).load(record.get('id'), {
		    scope: this,
		    failure: function(record, operation) {
		    },
		    success: function(record, operation) {
		    	Ext.widget(me.getCommonList().dialog).show();
		    	
		    	me.getCommonDialog().down('form').loadRecord(record);
		    	var titleUpdate = me.getCommonDialog().titleUpdate;
        		if (titleUpdate != undefined){
        			me.getCommonDialog().setTitle(me.getCommonDialog().titleUpdate);	
        		}
		    	if (me.actualController().onGetDataSuccess != undefined){
		    		me.actualController().onGetDataSuccess(record);	
		    	}
		    	
		    },
		    callback: function(record, operation, success) {
		    }
		});
    	
    },
    
    onDelete: function(button, event, options) {
    	console.log('CommonController.onDelete()');
    	if (this.getCommonGrid().getSelectionModel().getSelection().length > 0){
    		
    	}else{
    		AboutUs.util.NotificationUtil.showNotificationError("Voc� deve selecionar um registo.");
    	}
    },
    
    onSave: function(button, event, options) {
    	console.log('CommonController.onSave()');
    	var me = this;
    	var win = button.up('window'),
            form = win.down('form');
    	if (!form.isValid()){
    		AboutUs.util.NotificationUtil.showNotificationError("Preencha os campos obrigat�rios!");
    		return;
    	}
    	form.updateRecord();
    	if (this.getController(this.getControllerName()).onBeforeSaveData != undefined){
    		this.getController(this.getControllerName()).onBeforeSaveData();	
    	}
    	form.getRecord().save({
    		success: function(record, operation){
    			win.close();
        		me.getCommonGrid().getStore().reload();
	    	},
	    	failure: function(record, operation){
	    		var response = operation.request.proxy.reader.rawData;
	    		AboutUs.util.NotificationUtil.processMessages(response.messages);
	    	}
    	});
        /*form.submit({
        	url:this.getCommonDialog().urlSubmit,
        	scope:this,
        	success: function(form, action) {
        		win.hide();
        		this.getCommonGrid().getStore().reload();
            },
            failure: function(form, action) {
            	AboutUs.util.NotificationUtil.processMessages(action.result.messages);
                //AboutUs.util.NotificationUtil.showNotificationError("Erro ao guardar!");
            }
        });*/
    },
    
    onDoSearch: function(button, event, options) {
    	console.log('CommonController.onDoSearch()');
        var store = this.getCommonGrid().store;
        var form = this.getCriteriaContainer();
        var values = form.getValues();
        var filters = [];
 
        for (var p in values) {
        	var value = values[p];
        	var field =  form.getForm().findField(p);
        	if (value) {
        		filters.push({ property: p, value: value , type: field.xtype});
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
    	if (checked){
    		if (!menuItem.criteriaXtype){
    			menuItem.criteriaXtype= 'textfield'
    		}
	    	var field = Ext.widget(menuItem.criteriaXtype,{
	    		fieldLabel: menuItem.header,
				name : menuItem.criteriaName
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
