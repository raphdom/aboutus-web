Ext.define('AboutUs.view.component.ThumbField', {
	extend: 'Ext.form.FieldContainer',
	mixins: {
        field: 'Ext.form.field.Field'
    },
	alias: 'widget.thumbfield',
	
	requires:['Ext.ux.upload.BrowseButton'],
	
    layout: {
    	type:'hbox',
    	defaultMargins:{
		    right: 5
		}
    },
    items: [{
        xtype: 'image',
        src: 'resources/images/logoAboutUs.png',
        width: 150,
        height: 120
    }, {
        xtype: 'button',
        text:'Procurar',
        icon: 'resources/images/magnifier.png',
        handler:function(button){
        	AboutUs.app.getController('CloudController').openImagePicker();
        	var imagePicker = AboutUs.app.getController('CloudController').getImagePicker();
        	imagePicker.addListener({
        		recordSelected : function(imagePicker, recordsSelected){
        			var recordSelected = recordsSelected[0]; 
        			var thumbUrl = Ext.util.Format.formatThumbUrl(recordSelected.get('id'),
        			2,recordSelected.get('fileType'))
        			button.up().down('image').setSrc(thumbUrl);
        			button.up().setValue(recordSelected.get('id'));
        			imagePicker.close();
        		}
        	})
        }
    },{
    	xtype:'browserbutton',
    	listeners:{
    		fileselected:function(button, files){
				var xhr = new XMLHttpRequest();
			    
			    xhr.upload.addEventListener("progress", function(e) {
			        var pc = parseInt((e.loaded / e.total) * 100);
			        console.log(pc + "%")
			    }, false);
				xhr.addEventListener("loadend", function(e){
					 var response = e.target;
					 var id = Ext.decode(response.response).messages[0].message;
					 var thumbUrl = Ext.util.Format.formatThumbUrl(id,2)
        			 button.up().down('image').setSrc(thumbUrl);
        			 button.up().setValue(id);
				},false);
			
			    var formData = new FormData();
			    formData.append("file",files[0]);
			
			    xhr.open("POST", "cloud/upload.action", true);
			    xhr.setRequestHeader("X_FILENAME", files[0].name);
			    xhr.send(formData);
    		}
    	}
    	
    	
    }, {
        xtype: 'button',
        icon: 'resources/images/delete.png',
        handler:function(button){
        	button.up().down('image').setSrc('resources/images/logoAboutUs.png');
        }
    }],

    initComponent: function() {
    	var me = this;
        Ext.apply(me, {
        })
    	this.callParent(arguments);
    },
    
   	setValue: function(value) {
        var me = this;
        me.value = value;
        me.checkChange();
        if (value != 0){
        	var thumbUrl = Ext.util.Format.formatThumbUrl(value,2);
        	this.down('image').setSrc(thumbUrl);
        }
        return me;
    }
    
});