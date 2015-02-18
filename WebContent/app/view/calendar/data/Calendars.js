Ext.define('AboutUs.view.calendar.data.Calendars', {
    statics: {
        getData: function(){
            return {
                 "calendars" : [{
		                "id"    : 1,
		                "title" : "Liderança",
		                "color" : 2
                 	},{
                 		"id"    : 5,
		                "title" : "Liderança Espinho",
		                "color" : 14
		            },{
		                "id"    : 2,
		                "title" : "Site",
		                "color" : 22
		            },{
		                "id"    : 3,
		                "title" : "Obreiros",
		                "color" : 7
		            },{
		                "id"    : 4,
		                "title" : "Min. Música",
		                //"hidden" : true, // optionally init this calendar as hidden by default
		                "color" : 26
		            }]
            };    
        }
    }
});