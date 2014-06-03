Ext.define('AboutUs.model.site.ItemAlbum', {
    extend: 'Ext.data.Model',
    fields: [
    	{
    		name:'id',
    		type:'int'
    	},{
    		name:'title'
    	},{
    		name:'description'
		},{
    		name: 'ordering',
    		type:'int'
    	}]
    	
   	
});