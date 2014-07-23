Ext.define('AboutUs.model.music.Music', {
    extend: 'Ext.data.Model',
    fields: [
    	{
    		name:'id',
    		type:'int'
    	},{
    		name:'time',
    		type:'int',
    		useNull:true
    	},{
    		name:'originalTone'
    	},{
    		name:'drumsStyle'
    	},{
    		name:'link'
    	},{
    		name:'title'
    	},{
    		name:'author'
    	},{
    		name:'liryc'
    	},{
    		name:'musicNotes'
    	},{
    		name:'favorite',
    		type:'boolean'
    	},{
    		name: 'content'
    	},{
    		name: 'observations'
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