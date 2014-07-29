Ext.define('AboutUs.model.music.Playlist', {
    extend: 'Ext.data.Model',
    fields: [
    	{
    		name:'id',
    		type:'int'
    	},{
    		name:'name'
    	},{
    		name:'createDate',
    		type:'date',
    		dateReadFormat:'time',
    		dateWriteFormat:'d-m-Y',
    		persist:false
    	}],
    	
    hasMany: [
   		{model: 'AboutUs.model.music.Music', foreignKey: 'playlistId', name:'musics'}
	],
    	
   	proxy: {
        type: 'ajax',
        api: {
        	read : 'music/playlist/get.action',
            create : 'music/playlist/save.action',
            update: 'music/playlist/save.action',
            destroy: 'music/playlist/delete.action'
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