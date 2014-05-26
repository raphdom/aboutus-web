package com.jrdevel.aboutus.web.controller;

import java.util.Date;
import java.util.Map;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.jrdevel.aboutus.core.calendar.CalendarService;
import com.jrdevel.aboutus.core.common.to.ResultObject;
import com.jrdevel.aboutus.core.util.ExtJSReturn;

@RequestMapping(value="/calendar")
@Controller
public class CalendarController {
	
	private static final Logger logger = Logger.getLogger(CalendarController.class);
	
	@Autowired
	private CalendarService calendarService;
	
	@RequestMapping(value="/view.action")
	public @ResponseBody Map<String,? extends Object> view(@RequestParam String start, @RequestParam String end) throws Exception {

		try{
			
			ResultObject result = calendarService.list(null);
			
			return result.toMap();
			
		} catch (Exception e) {
			
			logger.error(e);
			
			return ExtJSReturn.mapError("Error retrieving People from database.");
		}
	}
	
}
