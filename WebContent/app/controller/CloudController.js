Ext.define('AboutUs.controller.CloudController', {
    extend: 'AboutUs.controller.CommonListController',
    
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
            'cloud.FolderDialog'
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
           ref: 'cloudDialog',
           selector: 'clouddialog'
       },{
           ref: 'folderDialog',
           selector: 'folderdialog',
           autoCreate:true,
           xtype:'folderdialog'
       },{
       		ref: 'fileDownloader',
       		selector: 'centercloudcontainer FileDownloader'
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
        		itemclick: this.onFolderClick
    		},
    		'treecloudpanel toolbar button[action=add]':{
    			click: this.onAddFolder
    		},
    		'tilegriddetails':{
    		        selectionchange: this.onFileSelected
    		},
    		'tilegridicons dataview':{
    		        selectionchange: this.onFileSelected
    		},
    		'tilegridthumbs dataview':{
    		        selectionchange: this.onFileSelected
    		},
    		'detailspanel toolbar button[action=view]':{
        		click: this.onViewImageFile
    		},
    		'detailspanel toolbar button[action=down]':{
        		click: this.onDownloadFile
    		}
                
        });
    },
    
    processActionMenu: function(type){
    	var centerContainer = this.getController('MainController').getMainContainer().down('container[itemId=centerContainer]');
    	var list = Ext.create('AboutUs.view.cloud.CloudContainer');
    	centerContainer.add(list);
    	this.hideAllGrids();
    	this.getTileGridThumbs().show();
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
    	this.getCenterCloudContainer().setTitle(this.getTreeCloudPanel().getFolderPath(record))
       	this.getCloudStoreStore().clearFilter(true);
       	this.getCloudStoreStore().filter({ property: 'folder.id', value: record.get('id') , type: 'id', operator:'eq'});
    },
    
    onFileSelected : function(view, selections){
        var selected = selections[0];
        
        if (selected) {
            this.getDetailsPanel().loadRecord(selected);
        }else{
            this.getDetailsPanel().clear();
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
    	var dialog = Ext.create('Ext.ux.upload.Dialog', {
		    dialogTitle: 'Adicionar ficheiros na pasta: ' + folderPath,
		    uploadUrl: 'cloud/upload.action',
		    modal:true,
		    uploadParams:{folderId:folder.get('id')}
		});
		
		dialog.show();
    },
    
    onViewImageFile: function(button){
          var recordSelect = this.getGridActive().getSelectionModel().getSelection();
          Lightview.show(recordSelect[0].data.url2);
    },
    
    onDownloadFile:function(button){
    	var record = this.getGridActive().getSelectionModel().getSelection()[0]
		this.getFileDownloader().load({
		    url: 'cloud/downloadFile.action?fileId='+record.get('id')
		});
    },
    
    onSlideShow: function(button){
        var images = new Array();
        AboutUs.app.getStore('CloudStore').each(function(item,index,count) {
              images.push({url:item.data.url2});
        });
        Lightview.show(images, 1);
    },
    
    onAddFolder: function(button){
   		this.getFolderDialog().show(); 	
    }
    
});