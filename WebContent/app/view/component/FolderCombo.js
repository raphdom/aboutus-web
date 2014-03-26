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
	
	/*createPicker: function() {
		var me = this;
		Ext.StoreManager.get('FolderComboStore').load();
		this.picker = Ext.create('Ext.tree.Panel', {
            autoScroll : true,
            floating : true,
            resizable: false,
            focusOnToFront : false,
            shadow : true,
            ownerCt : this.ownerCt,
            store : 'FolderComboStore',
            rootVisible : true,
            listeners:{
                scope:this,
                select:this.valueSelected
            }
		});
		return this.picker;
	},
	
	valueSelected: function(picker,value,options) {
        this.setValue(value.data.text);
        this.fireEvent('valueSelected',this,value.data.id);
        this.collapse();
    }*/
    
});