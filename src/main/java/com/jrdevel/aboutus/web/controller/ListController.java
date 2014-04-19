package com.jrdevel.aboutus.web.controller;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.jrdevel.aboutus.core.common.ListService;
import com.jrdevel.aboutus.core.common.constants.DAOConstants;
import com.jrdevel.aboutus.core.dto.GenericValueTextDTO;
import com.jrdevel.aboutus.core.util.ExtJSReturn;

/**
 * @author Raphael Domingues
 *
 */
public class ListController {

	private ListService listService;

	public void setListService(ListService listService) {
		this.listService = listService;
	}

	@RequestMapping(value="/list/country.action")
	public @ResponseBody Map<String,? extends Object> getListCountry(HttpSession session) throws Exception {

		try{

			List<GenericValueTextDTO> listCountry = listService.getList(DAOConstants.COUNTRY_LIST);
			
			return ExtJSReturn.mapOK(listCountry);

		} catch (Exception e) {

			return ExtJSReturn.mapError("O Email n�o existe registado no sistema!");
		}
	}
	
	@RequestMapping(value="/list/civilStatus.action")
	public @ResponseBody Map<String,? extends Object> getListCivilStatus(HttpSession session) throws Exception {

		try{

			List<GenericValueTextDTO> listCountry = listService.getList(DAOConstants.CIVILSTATUS_LIST);
			
			return ExtJSReturn.mapOK(listCountry);

		} catch (Exception e) {

			return ExtJSReturn.mapError("O Email n�o existe registado no sistema!");
		}
	}

}
