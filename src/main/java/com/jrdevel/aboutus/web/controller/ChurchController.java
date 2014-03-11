package com.jrdevel.aboutus.web.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.jrdevel.aboutus.core.church.ChurchService;
import com.jrdevel.aboutus.core.common.model.Church;
import com.jrdevel.aboutus.core.common.to.ListParams;
import com.jrdevel.aboutus.core.common.to.ListResult;
import com.jrdevel.aboutus.core.util.ExtJSReturn;

public class ChurchController {
	
	private ChurchService churchService;
	
	public void setChurchService(ChurchService churchService) {
		this.churchService = churchService;
	}
	
	
	@RequestMapping(value="/church/view.action")
	public @ResponseBody Map<String,? extends Object> view(ListParams input) throws Exception {

		try{
			
			ListResult<Church> result = churchService.getChurchList(input);
			
			return ExtJSReturn.mapOK(result.getData(), result.getTotal());
			
		} catch (Exception e) {

			return ExtJSReturn.mapError("Error retrieving Contacts from database.");
		}
	}
	
	

}
