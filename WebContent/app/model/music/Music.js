Ext.define('AboutUs.model.music.Music', {
    extend: 'Ext.data.Model',
    fields: [
    	{
    		name:'id',
    		type:'int'
    	},{
    		name:'title'
    	},{
    		name:'author'
    	},{
    		name:'liryc'
    	}],
    	
   	proxy: {
        type: 'ajax',
        api: {
        	read : 'music/music/get.action',
            create : 'music/music/save.action',
            update: 'music/music/save.action',
            destroy: 'music/music/delete.action'
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