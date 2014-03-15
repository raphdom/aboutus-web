Ext.define('AboutUs.view.cloud.CloudDialog' ,{
    extend: 'Ext.ux.upload.Dialog',
    alias : 'widget.clouddialog',
    
    modal:true,
    minimizable:true,
    uploadUrl: 'cloud/upload.action',
    textClose : 'Fechar',
    
    panel : Ext.create('Ext.ux.upload.Panel', {
        synchronous : this.synchronous,
        uploadUrl : this.uploadUrl,
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
    }),
    
    closeAction:'hidden',
    
    minimize:function(){
    	var buttonCloudDialog = AboutUs.app.getController('MainController').getButtonCloudDialog();
    	buttonCloudDialog.setVisible(true);
    	this.hide(buttonCloudDialog);
    },
    
    listeners:{
    	close:function(window,eOpts){
    		var buttonCloudDialog = AboutUs.app.getController('MainController').getButtonCloudDialog();
    		buttonCloudDialog.setVisible(false);
    	}
    }
    
});