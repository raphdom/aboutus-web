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
        		return this.formatThumbUrl(fileid, 4);
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
	        	if (filetype.indexOf("image") != -1 &&
            			filetype.indexOf("svg") == -1){
	        		return "resources/images/mimetypes/24/image-generic.png";
	        	}else{
	        		return "resources/images/mimetypes/24/default.png";
	        	}
        	}else{
        		
        		var sizeIconDataType = '24';
            	
            	if (datatype == 1){
            		sizeIconDataType= '32';
            	}else if(datatype == 2){
            		sizeIconDataType= '64';
            	}else if(datatype == 4){
            		sizeIconDataType= '128';
            	}
        		
            	if (Ext.isDefined(filetype) && (
            			filetype.indexOf("image") == -1 ||
            			filetype.indexOf("svg") >= 0
            			)){
            		return "resources/images/mimetypes/"+sizeIconDataType+"/"+filetype.replace('/','-')+".png";
            	}else{
            		return "cloud/getImage.action?imageId="+fileid+"&dataType="+datatype;
            	}
        	}
        },
        
        getDefaultIcon: function(fileid, datatype, filetype){
        	var sizeIconDataType = '24';
            	
        	if (datatype == 1){
        		sizeIconDataType= '32';
        	}else if(datatype == 2){
        		sizeIconDataType= '64';
        	}else if(datatype == 4){
        		sizeIconDataType= '128';
        	}
    		
        	return "resources/images/mimetypes/"+sizeIconDataType+"/default.png";
        	
        },
        
        getIcon: function(filetype){
        	//Se tiver dentro de um array o filetype devolve o filetype, senão se for imagem devolve image-generic senão devolve o default
        	if (filetype.indexOf("svg") == -1){
        		return filetype + '.png';
        	}else if (filetype.indexOf("image") != -1){
        		return "image-generic.png";
        	}else{
        		return "default.png";
        	}
        }
        
});

Ext.apply(Ext.form.field.VTypes, {
    DateRange: function(val, field) {
        var date = field.parseDate(val);
 
        if (!date) {
            return false;
        }
        if (field.startDateField && (!field.dateRangeMax || (date.getTime() != field.dateRangeMax.getTime()))) {
            var start = field.up(field.ownerCt.xtype).down('datefield[vfield=beginDate]');
            start.setMaxValue(date);
            start.validate();
            field.dateRangeMax = date;
        }
        else if (field.endDateField && (!field.dateRangeMin || (date.getTime() != field.dateRangeMin.getTime()))) {
            var end = field.up(field.ownerCt.xtype).down('datefield[vfield=endDate]');
            end.setMinValue(date);
            end.validate();
            field.dateRangeMin = date;
        }
        /*
         * Always return true since we're only using this vtype to set the
         * min/max allowed values (these are tested for after the vtype test)
         */
        return true;
    },
    DateRangeText: 'From date must be before To date'
});

Ext.override(Ext.data.proxy.Server, {
	buildRequest: function(operation) {
	    var me = this,
            // Clone params right now so that they can be mutated at any point further down the call stack
            params = operation.params = Ext.apply({}, operation.params, me.extraParams),
            request;

        //copy any sorters, filters etc into the params so they can be sent over the wire
        Ext.applyIf(params, me.getParams(operation));

        // Set up the entity id parameter according to the configured name.
        // This defaults to "id". But TreeStore has a "nodeParam" configuration which
        // specifies the id parameter name of the node being loaded.
        if (operation.id !== undefined && params[me.idParam] === undefined) {
            params[me.idParam] = operation.id;
        }

        if (this.$className == 'AboutUs.store.AbstractAjaxProxy'){
        	params.sort = Ext.JSON.decode(params.sort);
        	params.filter = Ext.JSON.decode(params.filter);
        	params = Ext.JSON.encode(params);
        }
        
        request = new Ext.data.Request({
            params   : params,
            action   : operation.action,
            records  : operation.records,
            operation: operation,
            url      : operation.url,

            // this is needed by JsonSimlet in order to properly construct responses for
            // requests from this proxy
            proxy: me
        });
        
        request.url = me.buildUrl(request);

        /*
         * Save the request on the Operation. Operations don't usually care about Request and Response data, but in the
         * ServerProxy and any of its subclasses we add both request and response as they may be useful for further processing
         */
        operation.request = request;

        return request;
    }
});