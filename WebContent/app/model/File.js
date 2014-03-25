Ext.define('AboutUs.model.File', {
    extend: 'Ext.data.Model',
    fields: [
            'filename',
            'fileType',
            'filesize',
            'title',
            'caption',
            'keywords',
            {
            	name:'createdDate',
            	type:'date',
        		dateReadFormat:'time'
            },{
                    name:'classThumb',
                    persist:false,
                    convert:function(v, record){
                        if (record.data.fileType.indexOf("image") != -1){
							return "thumb";
                    	}else{
                    		return "thumbIcon";
                    	}
                    }
            }
	],
	
	proxy: {
        type: 'ajax',
        api: {
            update: 'cloud/saveFile.action'
        },
        reader: {
            type: 'json',
            root: 'data',
            successProperty: 'success'
        },
        writer: {
            type: 'associatedjson',
            writeAllFields: true,
            encode: false,
            allowSingle:false
        }
    }
});