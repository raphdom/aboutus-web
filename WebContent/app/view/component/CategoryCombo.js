Ext.define('AboutUs.view.component.CategoryCombo', {
	extend: 'Ext.ux.form.field.TreePicker',
	alias: 'widget.categorycombo',

	displayField: 'text',
    valueField: 'id',
    
    initComponent: function() {
    	var me = this;
        var store = AboutUs.app.getStore('site.CategoryComboStore');
        AboutUs.app.getStore('site.CategoryComboStore').load();
        Ext.apply(me, {
        	store:store
        })
    	this.callParent(arguments);
    }
    
});