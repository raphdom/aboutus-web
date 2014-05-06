Ext.define('AboutUs.view.component.ListCombo', {
    extend: 'Ext.form.field.ComboBox',
    
    alias: 'widget.listcombo',
    
    displayField:'text',
	valueField:'value',
	queryMode:'local',
    
    initComponent: function() {
    	var me = this;
    	var store = Ext.create('Ext.data.Store', {
		    fields: ['value','text'], 
		    autoLoad:true,
		    proxy: {
		        type: 'ajax',
		        api: {
		        	read : me.url
		        },
		        reader: {
		            type: 'json',
		            root: 'data',
		            successProperty: 'success'
		        }
		    }
		})
    	Ext.apply(me, {
        	store:store
        })
        this.callParent(arguments);
    }
    
});