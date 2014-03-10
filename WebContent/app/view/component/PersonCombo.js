Ext.define('AboutUs.view.component.PersonCombo', {
    extend: 'Ext.form.field.ComboBox',
    
    alias: 'widget.personcombo',
    
    store:Ext.create('Ext.data.Store', {
	    model: 'AboutUs.model.Person',
	    loaded:false,
	    proxy: {
	        type: 'ajax',
	        api: {
	        	read : 'person/view.action'
	        },
	        reader: {
	            type: 'json',
	            root: 'data',
	            successProperty: 'success'
	        }
	    }
	}),
    displayField:'name',
    valueField:'id'
    
});