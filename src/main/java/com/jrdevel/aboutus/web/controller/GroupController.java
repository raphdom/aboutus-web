package com.jrdevel.aboutus.web.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.jrdevel.aboutus.core.common.model.Group;
import com.jrdevel.aboutus.core.common.to.ListParams;
import com.jrdevel.aboutus.core.common.to.ResultObject;
import com.jrdevel.aboutus.core.user.GroupService;
import com.jrdevel.aboutus.core.util.ExtJSReturn;

/**
 * @author Raphael Domingues
 *
 */

@RequestMapping(value="/group")
@Controller
public class GroupController {
	
	@Autowired
	private GroupService groupService;
	
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
	public @ResponseBody Map<String,? extends Object> get(Group input) throws Exception {

		try{
			
			ResultObject result = groupService.get(input);
			
			return result.toMap();
			
		} catch (Exception e) {

			return ExtJSReturn.mapError("Error retrieving Group from database.");
		}
	}
	
	@RequestMapping(value="/save.action")
	public @ResponseBody Map<String,? extends Object> save(Group input) throws Exception {

		try{

			ResultObject result = groupService.update(input);
			
			return result.toMap();
			
		} catch (Exception e) {

			return ExtJSReturn.mapError("Error retrieving Groups from database.");
		}
	}
	
	@RequestMapping(value="/delete.action")
	public @ResponseBody Map<String,? extends Object> delete(List<Group> input) throws Exception {

		try{

			ResultObject result = groupService.delete(input);
			
			return result.toMap();
			
		} catch (Exception e) {

			return ExtJSReturn.mapError("Error retrieving Groups from database.");
		}
	}

}
