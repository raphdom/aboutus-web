Ext.define('AboutUs.view.authentication.TermsOfUseDialog', {
    extend: 'Ext.window.Window',
    
    alias: 'widget.termswindow',
    
    title: 'Termos de Utilização',
    modal: true,
    contentEl: Ext.getDom('legalese'),
    width: 700,
    height: 400,
    bodyPadding: '10 20',
    autoScroll: true,
    buttons: [{
        text: 'Rejeitar',
        action:'decline'
    }, {
        text: 'Aceitar',
        action:'accept'
    }]
});