package com.jrdevel.aboutus.web.controller;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Map;

import net.aboutchurch.common.dto.EventDTO;
import net.aboutchurch.common.to.ResultObject;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.jrdevel.aboutus.core.calendar.EventService;
import com.jrdevel.aboutus.core.common.helper.MessageHelper;
import com.jrdevel.aboutus.core.util.ExtJSReturn;

@RequestMapping(value="/event")
@Controller
public class EventController {
	
	private static final Logger logger = Logger.getLogger(EventController.class);
	
	@Autowired
	private EventService eventService;
	
	@RequestMapping(value="/view.action")
	public @ResponseBody Map<String,? extends Object> view(@RequestParam String startDate, @RequestParam String endDate) throws Exception {

		try{
			
			SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");
		 
			Date rangeStart = formatter.parse(startDate);
			Date rangeEnd = formatter.parse(endDate);
			
			ResultObject result = eventService.list(rangeStart,rangeEnd);
			
			
			return result.toMap();
			
		} catch (Exception e) {
			
			logger.error(e);
			
			return ExtJSReturn.mapError("Error retrieving People from database.");
		}
	}
	
	@RequestMapping(value="/save.action", method = RequestMethod.POST)
	public @ResponseBody Map<String,? extends Object> save(@RequestBody EventDTO eventDTO) throws Exception {

		try{

			ResultObject result = null;

			result = eventService.save(eventDTO);
			
			return result.toMap();
			
		} catch (Exception e) {
			
			logger.error(e);
			
			return ExtJSReturn.mapError(MessageHelper.genericErrorMessage());
		}
	}
	
	@RequestMapping(value="/get.action")
	public @ResponseBody Map<String,? extends Object> get(Integer id) throws Exception {

		try{
			
			ResultObject result = eventService.get(id);
			
			return result.toMap();
			
		} catch (Exception e) {
			
			logger.error(e);

			return ExtJSReturn.mapError("Error retrieving Person from database.");
		}
	}
	
	@RequestMapping(value="/delete.action", method = RequestMethod.POST)
	public @ResponseBody Map<String,? extends Object> delete(@RequestBody EventDTO eventDTO) throws Exception {

		try{

			ResultObject result = null;

			result = eventService.delete(eventDTO.getEid());
			
			return result.toMap();
			
		} catch (Exception e) {
			
			logger.error(e);
			
			return ExtJSReturn.mapError(MessageHelper.genericErrorMessage());
		}
	}
	
}
