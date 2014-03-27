Ext.define('AboutUs.view.component.FolderCombo', {
	extend: 'Ext.ux.form.field.TreePicker',
	alias: 'widget.foldercombo',

	displayField: 'text',
    valueField: 'id',
    
    initComponent: function() {
    	var me = this;
        var store = AboutUs.app.getStore('FolderComboStore');
        AboutUs.app.getStore('FolderComboStore').load();
        Ext.apply(me, {
        	store:store
        })
    	this.callParent(arguments);
    }
    
});