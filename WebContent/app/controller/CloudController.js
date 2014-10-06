Ext.define('AboutUs.controller.CloudController', {
    extend: 'Ext.app.Controller',
    
    stores: ['CloudStore','FolderStore','FolderComboStore'],

    models: ['File'],
    
    views: [
            'cloud.CloudContainer',
            'cloud.DetailsPanel',
            'cloud.TreeCloudPanel',
            'cloud.TileGridDetails',
            'cloud.TileGridIcons',
            'cloud.TileGridThumbs',
            'cloud.CenterCloudContainer',
            'cloud.CloudDialog',
            'cloud.FolderDialog',
            'cloud.ImagePicker',
            'cloud.ThumbView'
    ],
    
   refs: [
       {
           ref: 'cloudContainer',
           selector: 'cloudcontainer'
       },{
           ref: 'detailsPanel',
           selector: 'detailspanel'
       },{
           ref: 'treeCloudPanel',
           selector: 'treecloudpanel'
       },{
           ref: 'tileGridDetails',
           selector: 'tilegriddetails'
       },{
           ref: 'tileGridIcons',
           selector: 'tilegridicons'
       },{
           ref: 'tileGridThumbs',
           selector: 'tilegridthumbs'
        },{
           ref: 'centerCloudContainer',
           selector: 'centercloudcontainer'
        },{
        	ref: 'uploadButton',
        	selector:'centercloudcontainer toolbar button[action=add]'
        },{
           ref: 'cloudDialog',
           selector: 'clouddialog',
           autoCreate:true,
           xtype:'clouddialog'
       },{
           ref: 'folderDialog',
           selector: 'folderdialog',
           autoCreate:true,
           xtype:'folderdialog'
       },{
       		ref: 'fileDownloader',
       		selector: 'centercloudcontainer FileDownloader'
        },{
           ref: 'imagePicker',
           selector: 'imagepicker',
           autoCreate:true,
           xtype:'imagepicker'
        }
    ],
    
   init: function() {
        this.control({
            'centercloudcontainer toolbar button[action=gridThumbs]':{
        		click: this.onClickGridThumbs
    		},
    		'centercloudcontainer toolbar button[action=gridDetails]':{
        		click: this.onClickGridDetails
    		},
    		'centercloudcontainer toolbar button[action=gridIcons]':{
        		click: this.onClickGridIcons
    		},
    		'centercloudcontainer toolbar button[action=add]':{
        		click: this.onAddFiles
    		},
    		'centercloudcontainer toolbar button[action=slideshow]':{
        		click: this.onSlideShow
    		},
    		'centercloudcontainer toolbar combo':{
        		select: this.onComboOrderSelect,
        		afterrender:this.onAfterRenderComboOrder
    		},
    		'treecloudpanel':{
        		itemclick: this.onFolderClick,
        		selectionchange : this.onFolderSelectionChange
    		},
    		'treecloudpanel toolbar button[action=add]':{
    			click: this.onAddFolder
    		},
    		'treecloudpanel toolbar button[action=edit]':{
    			click: this.onEditFolder
    		},
    		'treecloudpanel toolbar button[action=del]':{
    			click: this.onDeleteFolder
    		},
    		'treecloudpanel treeview':{
    			beforedrop: this.onBeforeDropFiles
    		},
    		'tilegriddetails':{
    		        selectionchange: this.onFileSelected,
    		        itemdblclick: this.onFileDoubleClick
    		},
    		'tilegridicons dataview':{
    		        selectionchange: this.onFileSelected,
    		        itemdblclick: this.onFileDoubleClick
    		},
    		'tilegridthumbs dataview':{
    		        selectionchange: this.onFileSelected,
    		        itemdblclick: this.onFileDoubleClick
    		},
    		'detailspanel toolbar button[action=view]':{
        		click: this.onViewImageFile
    		},
    		'detailspanel toolbar button[action=down]':{
        		click: this.onDownloadFile
    		},
    		'detailspanel toolbar button[action=edit]':{
        		click: this.onEditFile
    		},
    		'detailspanel toolbar button[action=delete]':{
        		click: this.onDeleteFile
    		},
    		'clouddialog':{
    			itemuploadsuccess: this.onItemUploadSucess,
    			uploadcomplete: this.onUploadComplete
    		},
    		'folderdialog commonform button[action=save]':{
    			click: this.onSaveFolder
    		},
    		'folderdialog commonform button[action=cancel]':{
    			click: this.onCancelFolder
    		},
    		'imagepicker button[action=cancel]':{
    			click: this.onCancelImagePicker
    		},
    		'imagepicker button[action=accept]':{
    			click: this.onAcceptImagePicker
    		}
                
        });
    },
    
    processActionMenu: function(type){
    	var centerContainer = this.getController('MainController').getMainContainer().down('container[itemId=centerContainer]');
    	var list = Ext.create('AboutUs.view.cloud.CloudContainer');
    	centerContainer.add(list);
    	this.getCloudStoreStore().removeAll();
    	this.hideAllGrids();
    	this.getTileGridThumbs().show();
    	centerContainer.setLoading(false);
    	this.getFolderStoreStore().load();
    },
    
    openImagePicker: function(){
    	this.getImagePicker().show();
    	this.getCloudStoreStore().removeAll();
    	this.hideAllGrids();
    	this.getTileGridThumbs().show();
    	this.getFolderStoreStore().load();
    },
    
    onClickGridDetails: function(button){
        this.keepSelection(this.getGridActive(),this.getTileGridDetails());
        this.hideAllGrids();
        this.getTileGridDetails().show();
    },
    
    onClickGridThumbs: function(button){
        this.keepSelection(this.getGridActive(),this.getTileGridThumbs().down('dataview'));
        this.hideAllGrids();
        this.getTileGridThumbs().show();
    },
    
    onClickGridIcons: function(button){
        this.keepSelection(this.getGridActive(),this.getTileGridIcons().down('dataview'));
        this.hideAllGrids();
        this.getTileGridIcons().show();
    },
    
    keepSelection : function(from, to){
        to.getSelectionModel().select(from.getSelectionModel().getSelection());
    },
    
    hideAllGrids : function(){
        this.getTileGridDetails().hide();
        this.getTileGridIcons().hide();
        this.getTileGridThumbs().hide();
    },
    
    getGridActive: function(){
        if (this.getTileGridDetails().isVisible()){
                return this.getTileGridDetails();
        }else if (this.getTileGridIcons().isVisible()){
                return this.getTileGridIcons().down('dataview');
        }else if (this.getTileGridThumbs().isVisible()){
                return this.getTileGridThumbs().down('dataview');
        }
    },
    
    onFolderClick : function(treepanel, record, item, idx, e, eOpts){
    	this.getCenterCloudContainer().setTitle(this.getTreeCloudPanel().getFolderPath(record));
       	this.getCloudStoreStore().clearFilter(true);
       	var filters = new Array();
       	filters.push({
       		property: 'folder.id', 
       		value: record.get('id') , 
       		type: 'id', 
       		operator:'eq'
       	});
       	if (!Ext.isEmpty(Ext.ComponentQuery.query('imagepicker'))){
	       	filters.push({
	       		property: 'fileType',
	   			value: 'image',
	   			type: 'textfield'
	       	});
       	}
       	this.getCloudStoreStore().filter(filters);
    },
    
    refresh : function(){
    	var folderSelected = this.getTreeCloudPanel().getSelectionModel().getSelection()[0];
    	this.onFolderClick(this.getTreeCloudPanel(),folderSelected);
    },
    
    onFolderSelectionChange: function (treepanel, selected, eOpts){
    	if (treepanel.hasSelection()){
    		this.getUploadButton().enable();
    	}else{
    		this.getUploadButton().disable();
    	}
    },
    
    onFileSelected : function(view, selections){
    	if (selections.length == 1){
            this.getDetailsPanel().loadRecord(selections[0]);
    	}else if (selections.length == 0){
    		this.getDetailsPanel().clear();
    	}else {
    		var totalfilesize = 0;
    		Ext.Array.forEach(selections, function(item, index, allItems){
    			totalfilesize = totalfilesize + item.get('filesize');
    		});
    		this.getDetailsPanel().loadRecords(selections.length,totalfilesize);
    	}
    },
    
    onComboOrderSelect : function(combo, record, eOpts){
        AboutUs.app.getStore('CloudStore').sort(combo.getValue());
    },
    
    onAfterRenderComboOrder: function(combo, eOpts){
    	var recordSelected = combo.getStore().getAt(0);
        combo.setValue(recordSelected.get('key'));
        this.onComboOrderSelect(combo);
    },
    
    onAddFiles: function(button){
    	var folder = this.getTreeCloudPanel().getSelectedFolder();
    	var folderPath = this.getTreeCloudPanel().getFolderPath(folder);
    	
    	this.getCloudDialog();
    	this.getCloudDialog().setFolder(folder,folderPath);
    	
    	var buttonCloudDialog = AboutUs.app.getController('MainController').getButtonCloudDialog();
    	
    	if (buttonCloudDialog.isVisible()){
    		this.getCloudDialog().show(buttonCloudDialog);
    	}else{
    		this.getCloudDialog().removeAllFiles();
    		this.getCloudDialog().show(button);
    	}
    },
    
    onViewImageFile: function(button){
          var recordSelect = this.getGridActive().getSelectionModel().getSelection()[0];
          var url = Ext.util.Format.formatThumbUrl(recordSelect.get('id'),10,recordSelect.get('fileType'));
          Lightview.show(baseURL+url);
    },
    
    onDownloadFile:function(button){
    	var record = this.getGridActive().getSelectionModel().getSelection()[0];
		this.getFileDownloader().load({
		    url: 'cloud/downloadFile.action?fileId='+record.get('id')
		});
    },
    
    onEditFile:function(button){
    	console.log('onEditFile');
    },
    
    onDeleteFile: function(button){
    	console.log('onDeleteFile');
    	var records = this.getGridActive().getSelectionModel().getSelection();
    	if (records.length > 0){
    		Ext.Msg.confirm('Eliminar', 'Deseja realmente eliminar os registos selecionados', 
    			function(btn, text){
			    	if (btn == 'yes'){
						this.getCloudStoreStore().remove(records);
			    		this.getCloudStoreStore().sync({
			    			success: function(record, operation){
			    				var response = this.getReader().jsonData;
				    			AboutUs.util.NotificationUtil.processMessages(response.messages);
					    	},
					    	failure: function(record, operation){
					    		var response = this.getReader().jsonData;
				    			AboutUs.util.NotificationUtil.processMessages(response.messages);
					    	}
			    		});	    		
			    	}
    			}
    		,this);
    		
    	}else{
    		AboutUs.util.NotificationUtil.showNotificationError("Você deve selecionar um registo.");
    	}
    },
    
    onSlideShow: function(button){
        var images = new Array();
        AboutUs.app.getStore('CloudStore').each(function(item,index,count) {
        	  if (item.get('fileType').indexOf("image") != -1){
        	  	var url = Ext.util.Format.formatThumbUrl(item.get('id'),10,item.get('fileType'));
              	images.push({url:baseURL+url});
        	  }
        });
        Lightview.show(images, 1);
    },
    
    onAddFolder: function(button){
   		this.getFolderDialog().show();
   		var folder = this.getTreeCloudPanel().getSelectionModel().getSelection()[0];
   		var record = Ext.create('AboutUs.model.Folder');
   		record.set('parent',folder.get('id'));
    	this.getFolderDialog().down('form').loadRecord(record);
    },
    
    onItemUploadSucess:function(panel, manager, item, info){
    	if (this.getTreeCloudPanel()){
	    	var folderSelected = this.getTreeCloudPanel().getSelectionModel().getSelection()[0];
	    	if (folderSelected.get('id')==this.getCloudDialog().folderId){
	    		this.onFolderClick(this.getTreeCloudPanel(),folderSelected);
	    	}
    	}
    },
    
    onUploadComplete: function(panel, manager, items, errorCount){
    	var buttonCloudDialog = AboutUs.app.getController('MainController').getButtonCloudDialog();
    	if (buttonCloudDialog.isVisible()){
    		
    	}else{
    		this.getCloudDialog().close();
    	}
    },
    
    onFileDoubleClick: function(view, record, item, index, e, eOpts){
    	if (record.get('fileType').indexOf("image") != -1){
    		this.onViewImageFile();
    	}else{
    		this.onDownloadFile();
    	}
    },
    
    onSaveFolder: function(button){
    	var me = this;
    	var win = button.up('window'),
            form = win.down('form');
    	if (!form.isValid()){
    		AboutUs.util.NotificationUtil.showNotificationError("Preencha os campos obrigatórios!");
    		return;
    	}
    	form.updateRecord();
    	
    	form.getRecord().save({
    		success: function(record, operation){
    			win.close();
    			me.getFolderStoreStore().load({
    				callback: function(records, operation, success) {
				        var node = me.getFolderStoreStore().getNodeById(record.get('id'));
				        me.getTreeCloudPanel().getSelectionModel().select(node);
				        me.getTreeCloudPanel().expandPath(node.getPath());
				        me.onFolderClick(me.getTreeCloudPanel(),node);
				    }
    			});
	    	},
	    	failure: function(record, operation){
	    		var response = operation.request.proxy.reader.rawData;
	    		AboutUs.util.NotificationUtil.processMessages(response.messages);
	    	}
    	});
    },
    
    onCancelFolder: function(button){
    	button.up('window').close();
    },
    
    onEditFolder: function(button){
   		this.getFolderDialog().show();
   		var record = this.getTreeCloudPanel().getSelectionModel().getSelection()[0];
    	this.getFolderDialog().down('form').loadRecord(record); 
    },
    
    onDeleteFolder:function(button){
    	var record = this.getTreeCloudPanel().getSelectionModel().getSelection();
    	var me = this;
    	if (record.length > 0){
    		Ext.Msg.confirm('Eliminar', 'Deseja realmente eliminar os registos selecionados', 
    			function(btn, text){
			    	if (btn == 'yes'){
			    		
						var ids = new Array();
			    		Ext.Array.each(me.getTreeCloudPanel().getSelectionModel().getSelection(), function(record, index) {
							ids.push(record.getId());
			    		});
			    		Ext.Ajax.request({
						    url: 'folder/delete.action',
						    headers: {
			                	'Content-Type': 'application/json;'
			                },
						    params: Ext.encode(ids),
						    success: function(response){
						        var response = Ext.decode(response.responseText);
						        AboutUs.util.NotificationUtil.processMessages(response.messages);
						        if (response.success){
						        	var nodeParent = me.getFolderStoreStore().getNodeById(record[0].get('parent'));
				        			me.getTreeCloudPanel().getSelectionModel().select(nodeParent);
				        			me.onFolderClick(me.getTreeCloudPanel(),nodeParent);
			    					record[0].remove();
						        }
						    }
						});
			    	}
    			}
    		,this);
    		
    	}else{
    		AboutUs.util.NotificationUtil.showNotificationError("Você deve selecionar um registo.");
    	}
    },
    
    _getRecordsSelected: function(){
    	return this.getGridActive().getSelectionModel().getSelection();
    },
    
    onAcceptImagePicker: function(button){
    	var recordSel = this._getRecordsSelected();
    	if (recordSel){
    		this.getImagePicker().fireEvent('recordSelected', this.getImagePicker(), recordSel);
    	}else{
    		AboutUs.util.NotificationUtil.showNotificationError("Selecione uma imagem!");
    	}
    },
    
    onCancelImagePicker: function(button){
    	this.getImagePicker().close();
    },
    
    onBeforeDropFiles: function(node, data, overModel, dropPosition, dropHandlers) {
	    dropHandlers.wait = true;
	    var me = this;
	    Ext.MessageBox.confirm('Mover ficheiros', 'Tem a certeza que deseja mover os ficheiros de pasta?', function(btn){
	        if (btn === 'yes') {
	        	var ids = new Array();
	    		Ext.Array.each(data.records, function(record, index) {
					ids.push(record.getId());
	    		});
	    		
	    		var params = {
	    			folderId : overModel.data.id,
	    			files : ids
	    		}
				Ext.Ajax.request({
				    url: 'cloud/moveFiles.action',
				    headers: {
	                	'Content-Type': 'application/json;'
	                },
				    params: Ext.encode(params),
				    success: function(response){
				        me.refresh();
				    }
				});
	        }
    	});
    	dropHandlers.cancelDrop();
    }
    
});