Ext.define('AboutUs.model.Folder', {
        extend: 'Ext.data.Model',
        fields: [
        	{
        		name:'id'
        	},{
        		name:'text'
	        },{
	        	name:'parent'
	        },{
	        	name:'parentId',
	        	persist:false
	        },{
	        	name:'leaf'
	        },{
	        	name:'path'
	        }
        ],
		
		proxy: {
	        type: 'ajax',
	        api: {
	        	read : 'folder/get.action',
	            create : 'folder/save.action',
	            update: 'folder/save.action',
	            destroy: 'folder/delete.action'
	        },
	        reader: {
	            type: 'json',
	            root: 'data',
	            successProperty: 'success'
	        },
	        writer: {
	            type: 'associatedjson',
	            writeAllFields: true,
	            encode: false
	        }
	    }
});