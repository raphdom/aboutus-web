Ext.define('AboutUs.view.common.List', {
    extend: 'Ext.panel.Panel',

    alias: 'widget.commonlist',
    
    editColumn:true,
    
    hidetoolbar:false,
    
    permissions:{
    	add:0,
    	edit:0,
    	remove:0
    },
    
    layout:{type:'vbox',align:'stretch'},
    
	initComponent: function(){
		var me = this;
		
		if (this.hidetoolbar!=true){
			
			var searchMenu = new Array();
			Ext.Array.each(this.columns, function(column, index, countriesItSelf) {
			    searchMenu.push({
			    	text: 'Procurar por '+ column.header,
			    	criteriaName:column.criteriaName ? column.criteriaName : column.dataIndex,
			    	header: column.header,
			    	checked: false,
			    	criteriaXtype:column.criteriaXtype
			    })
			});
			
			this.dockedItems = [{
			    xtype: 'toolbar',
			    dock: 'top',
			   items: [{
	                icon: 'resources/images/add.png',
	                itemId: 'add',
	                text: 'Adicionar',
	                action: 'add',
	                hidden:!AboutUs.util.UserManager.hasPermission(this.permissions.add)
	            },{
	                icon: 'resources/images/delete.png',
	                text: 'Eliminar',
	                action: 'delete',
	                hidden:!AboutUs.util.UserManager.hasPermission(this.permissions.remove)
	                
	            },'->',{
					xtype:'splitbutton',
					icon: 'resources/images/magnifier.png',
	                text: 'Pesquisar',
	                action: 'search',
	                menu: searchMenu
	            }]
			},{
			 	xtype: 'pagingtoolbar',
		        dock: 'bottom',
		        displayInfo: true,
		        store:this.store
			}];
		}
		
		if (this.editColumn && AboutUs.util.UserManager.hasPermission(this.permissions.edit)){
			var columnsList = this.columns;
			
			this.columns = [{
	            xtype:'actioncolumn',
	            width:30,
	            hideable:false,
	            menuDisabled:true,
	            resizable:false,
	            items: [{
	                icon: 'resources/images/edit.png',
	                tooltip: 'Editar',
	                handler: function(grid, rowIndex, colIndex) {
	                    var rec = grid.getStore().getAt(rowIndex);
	                    if(rec){
	    					this.up('commonlist').fireEvent('editRecord', this, rec);
	    				}
	                }
	            	}]
			}]; 
			this.columns.push.apply(this.columns,columnsList);
		}
		
		var grid = Ext.create('Ext.grid.Panel',{
			xtype:'grid',
			store:me.store,
			columns:me.columns,
			selType: 'checkboxmodel',
			flex:1
		});
		
		this.grid = grid;
		
        Ext.applyIf(me, {
        	items: [{xtype:'criteriacontainer'},grid]
        });
		
        grid.addEvents('editRecord');
        AboutUs.app.getStore(this.store).clearFilter();
        this.callParent(arguments);
    }
    
    
    
});