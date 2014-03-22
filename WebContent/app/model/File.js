Ext.define('AboutUs.model.File', {
        extend: 'Ext.data.Model',
        fields: [
                'filename',
                'filetype',
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
                        convert:function(v, record){
                            if (record.data.filetype.indexOf("image") != -1){
								return "thumb";
                        	}else{
                        		return "thumbIcon";
                        	}
                        }
                }
		]
});