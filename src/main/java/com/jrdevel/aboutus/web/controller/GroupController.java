package com.jrdevel.aboutus.web.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.jrdevel.aboutus.core.model.Group;
import com.jrdevel.aboutus.core.service.GroupService;
import com.jrdevel.aboutus.core.util.ExtJSReturn;
import com.jrdevel.aboutus.core.util.ListParams;
import com.jrdevel.aboutus.core.util.ResultObject;

/**
 * @author Raphael Domingues
 *
 */
@Controller
public class GroupController {
	
	private GroupService groupService;
	
	@Autowired
	public void setGroupService(GroupService groupService) {
		this.groupService = groupService;
	}
	
	
	@RequestMapping(value="/group/view.action")
	public @ResponseBody Map<String,? extends Object> view(ListParams input) throws Exception {

		try{
			
			ResultObject result = groupService.list(input);
			
			return result.toMap();
			
		} catch (Exception e) {

			return ExtJSReturn.mapError("Error retrieving Groups from database.");
		}
	}
	
	@RequestMapping(value="/group/get.action")
	public @ResponseBody Map<String,? extends Object> get(Group input) throws Exception {

		try{
			
			ResultObject result = groupService.get(input);
			
			return result.toMap();
			
		} catch (Exception e) {

			return ExtJSReturn.mapError("Error retrieving Group from database.");
		}
	}
	
	@RequestMapping(value="/group/save.action")
	public @ResponseBody Map<String,? extends Object> save(Group input) throws Exception {

		try{

			ResultObject result = groupService.update(input);
			
			return result.toMap();
			
		} catch (Exception e) {

			return ExtJSReturn.mapError("Error retrieving Groups from database.");
		}
	}
	
	@RequestMapping(value="/group/delete.action")
	public @ResponseBody Map<String,? extends Object> delete(List<Group> input) throws Exception {

		try{

			ResultObject result = groupService.delete(input);
			
			return result.toMap();
			
		} catch (Exception e) {

			return ExtJSReturn.mapError("Error retrieving Groups from database.");
		}
	}

}
