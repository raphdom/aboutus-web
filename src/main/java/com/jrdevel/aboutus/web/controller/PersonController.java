package com.jrdevel.aboutus.web.controller;

import java.util.List;
import java.util.Map;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.jrdevel.aboutus.core.common.to.ListParams;
import com.jrdevel.aboutus.core.common.to.ResultObject;
import com.jrdevel.aboutus.core.person.PersonDTO;
import com.jrdevel.aboutus.core.person.PersonService;
import com.jrdevel.aboutus.core.util.ExtJSReturn;

@RequestMapping(value="/person")
@Controller
public class PersonController {
	
	private static final Logger logger = Logger.getLogger(PersonController.class);
	
	@Autowired
	private PersonService personService;
	
	@RequestMapping(value="/view.action")
	public @ResponseBody Map<String,? extends Object> view(ListParams input) throws Exception {

		try{
			
			ResultObject result = personService.list(input);
			
			return result.toMap();
			
		} catch (Exception e) {
			
			logger.error(e);
			
			return ExtJSReturn.mapError("Error retrieving People from database.");
		}
	}
	
	@RequestMapping(value="/viewCombo.action")
	public @ResponseBody Map<String,? extends Object> viewCombo() throws Exception {

		try{
			
			ResultObject result = personService.listNames();
			
			return result.toMap();
			
		} catch (Exception e) {
			
			logger.error(e);
			
			return ExtJSReturn.mapError("Error retrieving People from database.");
		}
	}
	
	@RequestMapping(value="/get.action")
	public @ResponseBody Map<String,? extends Object> get(Integer id) throws Exception {

		try{
			
			ResultObject result = personService.get(id);
			
			return result.toMap();
			
		} catch (Exception e) {
			
			logger.error(e);

			return ExtJSReturn.mapError("Error retrieving Person from database.");
		}
	}
	
	@RequestMapping(value="/save.action", method = RequestMethod.POST)
	public @ResponseBody Map<String,? extends Object> save(@RequestBody PersonDTO personDTO) throws Exception {

		try{

			ResultObject result = null;

			result = personService.save(personDTO);
			
			return result.toMap();
			
		} catch (Exception e) {
			
			logger.error(e);

			return ExtJSReturn.mapError("Error save Person in database.");
		}
	}
	
	@RequestMapping(value="/delete.action")
	public @ResponseBody Map<String,? extends Object> delete(@RequestBody List<Integer> ids) throws Exception {

		try{
			
			ResultObject result = personService.delete(ids);
			
			return result.toMap();
			
		} catch (Exception e) {

			return ExtJSReturn.mapError("Error removing Peolple from database.");
		}
	}
	
}
