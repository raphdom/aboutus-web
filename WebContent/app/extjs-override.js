Ext.apply(Ext.util.Format,{

        /**
         * Label plural formatter : lplural - to be used with templates
         *
         * @param value {Number} number
         * @param singular {String} singular form
         * @param plural {String} plural form
         * @param zero {String} zero form
         * @param addPluralValue {Boolean} whether to add 
         *            the value in the plural form
         */
        lplural: function(value, singular, plural, zero, addPluralValue){
            //make the text for the zero quantity be optional
            if (zero && !value){
                return zero;
            }

            //also the addPluralValue flag is optional - if it is true, 
           //also return the value: eg - 5 records 
            plural = addPluralValue? (value + ' ' + plural) : plural;

            return value != 1 ? plural : singular;
        },
        
        formatThumbProfile: function(fileid){
        	if (fileid && fileid > 0){
        		return this.formatThumbUrl(fileid, 2);
        	}else{
        		return "resources/images/noProfileImage.png";
        	}
        },
        
        /**
         * DATATYPE -1 = icons 24px
         * DATATYPE 0 = 50x40 (icons 32px)
         * DATATYPE 1 = 80X60 (icons 64px)
         * DATATYPE 2 = 150X120 (icons 128px)
         * DATATYPE 3 = 600X480
         * DATATYPE 4 = 1050X800
         * 
         */
        formatThumbUrl: function(fileid, datatype, filetype){
        	
        	if (datatype == -1){
	        	if (filetype.indexOf("image") != -1){
	        		return "resources/images/mimetypes/24/image-generic.png";
	        	}else{
	        		return "resources/images/mimetypes/24/default.png";
	        	}
        	}else{
        		
        		var sizeIconDataType = '24';
            	
            	if (datatype == 0){
            		sizeIconDataType= '32';
            	}else if(datatype == 1){
            		sizeIconDataType= '64';
            	}else if(datatype == 2){
            		sizeIconDataType= '128';
            	}
        		
            	if (Ext.isDefined(filetype) && filetype.indexOf("image") == -1){
            		return "resources/images/mimetypes/"+sizeIconDataType+"/default.png";
            	}else{
            		return "cloud/getImage.action?imageId="+fileid+"&dataType="+datatype;
            	}
        	}
        }
        
});