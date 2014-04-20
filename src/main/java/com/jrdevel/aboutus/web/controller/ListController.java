package com.jrdevel.aboutus.web.controller;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpSession;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.jrdevel.aboutus.core.common.ListService;
import com.jrdevel.aboutus.core.dto.GenericValueTextDTO;
import com.jrdevel.aboutus.core.util.ExtJSReturn;

/**
 * @author Raphael Domingues
 *
 */
@Controller
public class ListController {

	@Autowired
	private ListService listService;
	
	private static final Logger logger = Logger.getLogger(ListService.class);

	public void setListService(ListService listService) {
		this.listService = listService;
	}

	@RequestMapping(value="/list/country.action")
	public @ResponseBody Map<String,? extends Object> getListCountry() throws Exception {

		try{

			List<GenericValueTextDTO> listCountry = listService.getCountry();
			
			return ExtJSReturn.mapOK(listCountry);

		} catch (Exception e) {

			logger.error(e);
			
			return ExtJSReturn.mapError("Error retrieving List of Countries from database.");
		}
	}
	
	@RequestMapping(value="/list/civilStatus.action")
	public @ResponseBody Map<String,? extends Object> getListCivilStatus() throws Exception {

		try{

			List<GenericValueTextDTO> listCountry = listService.getCivilStatus();
			
			return ExtJSReturn.mapOK(listCountry);

		} catch (Exception e) {

			logger.error(e);
			
			return ExtJSReturn.mapError("Error retrieving List of Civil Status from database.");
		}
	}
	
	@RequestMapping(value="/list/memberType.action")
	public @ResponseBody Map<String,? extends Object> getListMemberType() throws Exception {

		try{

			List<GenericValueTextDTO> listCountry = listService.getMemberType();
			
			return ExtJSReturn.mapOK(listCountry);

		} catch (Exception e) {

			logger.error(e);
			
			return ExtJSReturn.mapError("Error retrieving List of Civil Status from database.");
		}
	}

}
