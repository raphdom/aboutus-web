package com.jrdevel.aboutus.web.controller;

import java.util.HashSet;
import java.util.List;
import java.util.Map;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.jrdevel.aboutus.core.model.Permission;
import com.jrdevel.aboutus.core.model.User;
import com.jrdevel.aboutus.core.service.UserService;
import com.jrdevel.aboutus.core.util.ExtJSReturn;
import com.jrdevel.aboutus.core.util.ListParams;
import com.jrdevel.aboutus.core.util.ResultObject;

@RequestMapping(value="/user")
public class UserController {
	
	
	private static final Logger logger = Logger.getLogger(UserController.class);
	
	private UserService userService;
	
	public void setUserService(UserService userService) {
		this.userService = userService;
	}
	
	private User userSession;
	
	@RequestMapping(value="/view.action")
	public @ResponseBody Map<String,? extends Object> view(ListParams input) throws Exception {

		try{
			
			ResultObject result = userService.list(input);
			
			return result.toMap();
			
		} catch (Exception e) {
			
			logger.error(e);
			
			return ExtJSReturn.mapError("Error retrieving Users from database.");
		}
	}
	
	@RequestMapping(value="/save.action", method = RequestMethod.POST)
	public @ResponseBody Map<String,? extends Object> save(@RequestBody User data) throws Exception {

		try{

			ResultObject result = userService.update(data);
			
			return result.toMap();
			
		} catch (Exception e) {

			return ExtJSReturn.mapError("Error save User in database.");
		}
	}
	
	@RequestMapping(value="/get.action")
	public @ResponseBody Map<String,? extends Object> get(User input) throws Exception {

		try{
			
			ResultObject result = userService.get(input);
			
			return result.toMap();
			
		} catch (Exception e) {

			return ExtJSReturn.mapError("Error retrieving Groups from database.");
		}
	}
	
	@RequestMapping(value="/delete.action")
	public @ResponseBody Map<String,? extends Object> delete(List<User> input) throws Exception {

		try{
			
			ResultObject result = userService.delete(input);
			
			return result.toMap();
			
		} catch (Exception e) {

			return ExtJSReturn.mapError("Error retrieving Groups from database.");
		}
	}
	
	@RequestMapping(value="/currentUser.action")
	public @ResponseBody Map<String,? extends Object> currentUser() throws Exception {

		try{
			
			ResultObject result = userService.get(userSession);
			User user = (User)result.getData().get(0);
			user.setPermissions(new HashSet<Permission>(userService.getUserPermissions(user)));
			
			return result.toMap();
			
		} catch (Exception e) {

			return ExtJSReturn.mapError("Error retrieving Groups from database.");
		}
	}
	

}
