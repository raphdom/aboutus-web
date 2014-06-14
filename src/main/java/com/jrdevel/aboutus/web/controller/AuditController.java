package com.jrdevel.aboutus.web.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.jrdevel.aboutus.core.audit.AuditService;
import com.jrdevel.aboutus.core.authentication.UserAuthenticatedManager;
import com.jrdevel.aboutus.core.common.to.Filter;
import com.jrdevel.aboutus.core.common.to.ListParams;
import com.jrdevel.aboutus.core.common.to.ResultObject;
import com.jrdevel.aboutus.core.common.to.Sort;

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
	
	@RequestMapping(value="/viewAuditHome.action")
	public @ResponseBody Map<String,? extends Object> viewAuditHome(ListParams input) throws Exception {

		Filter filter = new Filter();
		filter.setType("id");
		filter.setProperty("userId");
		filter.setOperator("eq");
		filter.setValue(Integer.toString(UserAuthenticatedManager.getCurrentUser().getId()));
		List<Filter> filters = new ArrayList<Filter>();
		filters.add(filter);
		
		Sort sort = new Sort();
		sort.setProperty("actionDate");
		sort.setDirection("desc");
		List<Sort> sorters = new ArrayList<Sort>();
		sorters.add(sort);
		
		input.setFilter(filters);
		input.setSorters(sorters);
		input.setLimit(5);
		
		ResultObject result = auditService.list(input);
		
		return result.toMap();
		
	}
	
}
