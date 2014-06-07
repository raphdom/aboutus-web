package com.jrdevel.aboutus.web.controller;

import java.util.Map;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.jrdevel.aboutus.core.audit.AuditService;
import com.jrdevel.aboutus.core.common.to.ListParams;
import com.jrdevel.aboutus.core.common.to.ResultObject;

@RequestMapping(value="/audit")
@Controller
public class AuditController {
	
	
	private static final Logger logger = Logger.getLogger(AuditController.class);
	
	@Autowired
	private AuditService auditService;
	
	@RequestMapping(value="/view.action")
	public @ResponseBody Map<String,? extends Object> view(ListParams input) throws Exception {

		
		ResultObject result = auditService.list(input);
		
		return result.toMap();
		
	}
	
}
