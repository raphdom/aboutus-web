package com.jrdevel.aboutus.web.controller;

import java.util.List;
import java.util.Map;

import net.aboutchurch.common.to.ListParams;
import net.aboutchurch.common.to.ResultObject;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.jrdevel.aboutus.core.common.helper.MessageHelper;
import com.jrdevel.aboutus.core.user.GroupDTO;
import com.jrdevel.aboutus.core.user.GroupService;
import com.jrdevel.aboutus.core.util.ExtJSReturn;

/**
 * @author Raphael Domingues
 *
 */

@RequestMapping(value="/group")
@Controller
public class GroupController {
	
	private static final Logger logger = Logger.getLogger(GroupController.class);
	
	@Autowired
	private GroupService groupService;
	
	@Autowired
	private MessageHelper messageHelper;
	
	@RequestMapping(value="/view.action")
	public @ResponseBody Map<String,? extends Object> view(ListParams input) throws Exception {

		try{
			
			ResultObject result = groupService.list(input);
			
			return result.toMap();
			
		} catch (Exception e) {

			return ExtJSReturn.mapError("Error retrieving Groups from database.");
		}
	}
	
	@RequestMapping(value="/get.action")
	public @ResponseBody Map<String,? extends Object> get(Integer id) throws Exception {

		try{
			
			ResultObject result = groupService.get(id);
			
			return result.toMap();
			
		} catch (Exception e) {

			logger.error(e);

			return ExtJSReturn.mapError(messageHelper.genericErrorMessage());
		}
	}
	
	@RequestMapping(value="/save.action")
	public @ResponseBody Map<String,? extends Object> save(@RequestBody GroupDTO input) throws Exception {

		try{

			ResultObject result = groupService.save(input);
			
			return result.toMap();
			
		} catch (Exception e) {

			return ExtJSReturn.mapError("Error retrieving Groups from database.");
		}
	}
	
	@RequestMapping(value="/delete.action")
	public @ResponseBody Map<String,? extends Object> delete(@RequestBody List<Integer> ids) throws Exception {

		try{

			ResultObject result = groupService.delete(ids);
			
			return result.toMap();
			
		} catch (Exception e) {

			return ExtJSReturn.mapError("Error retrieving Groups from database.");
		}
	}

}
