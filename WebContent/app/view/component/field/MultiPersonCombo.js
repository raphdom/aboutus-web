Ext.define('AboutUs.view.component.field.MultiPersonCombo', {
    extend: 'Ext.ux.form.field.BoxSelect',
    
    alias: 'widget.multipersoncombo',
    
    displayField:'text',
    valueField:'value',
	editable:true,
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