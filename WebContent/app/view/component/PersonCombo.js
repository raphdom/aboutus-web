Ext.define('AboutUs.view.component.PersonCombo', {
    extend: 'Ext.form.field.ComboBox',
    
    alias: 'widget.personcombo',
    
    displayField:'text',
    valueField:'value',
	editable:false,
	queryMode:'local',
	
    initComponent: function() {
    	var me = this;
    	var store = Ext.create('Ext.data.Store', {
		    model: 'AboutUs.model.GenericIdText',
		    autoLoad:true,
		    proxy: {
		        type: 'ajax',
		        api: {
		        	read : 'person/viewCombo.action'
		        },
		        reader: {
		            type: 'json',
		            root: 'data',
		            successProperty: 'success'
		        }
		    }
		});
    	Ext.apply(me, {
        	store:store
        })
        this.callParent(arguments);
    }
    
});