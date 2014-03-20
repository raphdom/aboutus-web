Ext.define('AboutUs.view.cloud.CloudDialog' ,{
    extend: 'Ext.ux.upload.Dialog',
    alias : 'widget.clouddialog',
    
    modal:true,
    minimizable:true,
    textClose : 'Fechar',
    folderId:null,
    
    panel : Ext.create('Ext.ux.upload.Panel', {
        synchronous : this.synchronous,
        uploadUrl : 'cloud/upload.action',
        uploadParams : this.uploadParams,
        uploader: 'Ext.ux.upload.uploader.FormDataUploader',
        
        textOk : 'OK',
        textUpload : 'Iniciar',
        textBrowse : 'Procurar',
        textAbort : 'Parar',
        textRemoveSelected : 'Remover selecionados',
        textRemoveAll : 'Remover todos',

        // grid strings
        textFilename : 'Nome do ficheiro',
        textSize : 'Tamanho',
        textType : 'Tipo',
        textStatus : 'Estado',
        textProgress : '%',
        buttonText : 'Procurar...',
        
        // status toolbar strings
        selectionMessageText : 'Selecionados {0} ficheiro(s), {1}',
        uploadMessageText : 'Progresso {0}% ({1} of {2} no total)',
        filenameEncoder : 'Ext.ux.upload.header.Base64FilenameEncoder'
    }),
    
    closeAction:'hidden',
    
    minimize:function(){
    	var buttonCloudDialog = AboutUs.app.getController('MainController').getButtonCloudDialog();
    	buttonCloudDialog.setVisible(true);
    	this.hide(buttonCloudDialog);
    },
    
    setFolder:function(folder,folderPath){
    	this.folderId = folder.get('id');
    	this.setTitle('Adicionar ficheiros na pasta: ' + folderPath);
    	Ext.apply(this.panel.uploadManager.uploader,{
    		params:{folderId:folder.get('id')}
    	});
    	Ext.apply(this,{
    		uploadUrl: 'cloud/upload.action',
    		filenameEncoder : 'Ext.ux.upload.header.Base64FilenameEncoder'
    	});
    },
    
    removeAllFiles:function(){
    	this.panel.onRemoveAll();
    },
    
    listeners:{
    	close:function(window,eOpts){
    		var buttonCloudDialog = AboutUs.app.getController('MainController').getButtonCloudDialog();
    		buttonCloudDialog.setVisible(false);
    	},
    	itemuploadsuccess:function(panel, manager, item, info){
    		//Actualizar toda a vez o folder.
    		//Se o folder estiver aberto e se o cloud estiver ativo
    		//Podes não estar devido a ter a janela minimizada e ter passado pra outro painel
    		
    		//console.log('item feito upload');
    	},
    	uploadcomplete:function(panel, manager, items, errorCount){
    		//Se a janela estiver minimizada dar uma mensagem
    		this.close();
    	}
    }
    
});