package com.jrdevel.aboutus.web.controller;

import java.util.Map;

import net.aboutchurch.common.to.ListParams;
import net.aboutchurch.common.to.ResultObject;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.jrdevel.aboutus.core.church.ChurchService;
import com.jrdevel.aboutus.core.common.helper.MessageHelper;
import com.jrdevel.aboutus.core.util.ExtJSReturn;

@RequestMapping(value="/church")
@Controller
public class ChurchController {
	
	@Autowired
	private ChurchService churchService;
	
	private static final Logger logger = Logger.getLogger(UserController.class);
	
	@RequestMapping(value="/view.action")
	public @ResponseBody Map<String,? extends Object> view(@RequestBody ListParams input) throws Exception {

		try{
			
			ResultObject result = churchService.list(input);
			
			return result.toMap();
			
		} catch (Exception e) {

			logger.error(e);

			return ExtJSReturn.mapError(MessageHelper.genericErrorMessage());
		}
	}
	
	

}
