Ext.define('AboutUs.view.component.criteria.AbstractBoxSelectCriterion', {
    extend: 'Ext.ux.form.field.BoxSelect',
    criteriaType:'multivalue',
    
    displayField:'text',
	valueField:'value',
    
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