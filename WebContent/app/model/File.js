Ext.define('AboutUs.model.File', {
        extend: 'Ext.data.Model',
        fields: [
                'filename',
                'filetype',
                'filesize',
                {
                        name:'shortName',
                        convert:function(v,record){
                                return Ext.util.Format.ellipsis(record.data.filename, 15);
                        }
                },{
                        name:'icon',
                        convert:function(v, record){
                        	if (record.data.filetype.indexOf("image") != -1){
                        		return "resources/images/mimetypes/24/image-generic.png";
                        	}else{
                        		return "resources/images/mimetypes/24/default.png";
                        	}
                       		
                        }
                },{
                        name:'url0',
                        convert:function(v, record){
                        	if (record.data.filetype.indexOf("image") != -1){
								return "cloud/getImage.action?imageId="+record.data.id+"&dataType=0";
                        	}else{
                        		return "resources/images/mimetypes/32/default.png";
                        	}
                        }
                },{
                        name:'url1',
                        convert:function(v, record){
                        	if (record.data.filetype.indexOf("image") != -1){
								return "cloud/getImage.action?imageId="+record.data.id+"&dataType=1";
                        	}else{
                        		return "resources/images/mimetypes/64/default.png";
                        	}
                        }
                },{
                        name:'url2',
                        convert:function(v, record){
                        	if (record.data.filetype.indexOf("image") != -1){
								return "cloud/getImage.action?imageId="+record.data.id+"&dataType=2";
                        	}else{
                        		return "resources/images/mimetypes/128/default.png";
                        	}
                        }
                },{
                    name:'url3',
                    convert:function(v, record){
						return "cloud/getImage.action?imageId="+record.data.id+"&dataType=3";
                    }
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