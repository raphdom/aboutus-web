Ext.define('AboutUs.view.component.FolderCombo', {
	extend: 'Ext.form.field.ComboBox',
	alias: 'widget.foldercombo',

	displayField: 'text',
    valueField: 'id',
	
	createPicker: function() {
		if (!this.treePanel){
			var me = this;
			Ext.StoreManager.get('FolderComboStore').load();
			this.treePanel = Ext.create('Ext.tree.Panel', {
				hidden: true,
				floating: true,
				rootVisible:false,
				store:'FolderComboStore',
				listeners:{
					itemclick: function(treepanel, record, item, idx, e, eOpts){
						me.setValue(record);
						me.collapse();
					}
				}
			});
		}
		return this.treePanel;
	}
    
});