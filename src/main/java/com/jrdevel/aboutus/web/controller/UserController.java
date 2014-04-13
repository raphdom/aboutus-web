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

import com.jrdevel.aboutus.core.common.model.User;
import com.jrdevel.aboutus.core.common.to.ListParams;
import com.jrdevel.aboutus.core.common.to.ResultObject;
import com.jrdevel.aboutus.core.user.UserService;
import com.jrdevel.aboutus.core.util.ExtJSReturn;

@RequestMapping(value="/user")
@Controller
public class UserController {
	
	
	private static final Logger logger = Logger.getLogger(UserController.class);
	
	@Autowired
	private UserService userService;
	
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
	
	@RequestMapping(value="/get.action")
	public @ResponseBody Map<String,? extends Object> get(Integer id) throws Exception {

		try{
			
			ResultObject result = userService.get(id);
			
			return result.toMap();
			
		} catch (Exception e) {

			return ExtJSReturn.mapError("Error retrieving Groups from database.");
		}
	}
	
	/*@RequestMapping(value="/save.action", method = RequestMethod.POST)
	public @ResponseBody Map<String,? extends Object> save(@RequestBody User user) throws Exception {

		try{

			ResultObject result = null;

			if (user.getId() != null && user.getId() != 0){
				result = userService.update(user);
			}else{
				result = userService.insert(user);
			}
			
			return result.toMap();
			
		} catch (Exception e) {

			return ExtJSReturn.mapError("Error save User in database.");
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
	
	/*@RequestMapping(value="/currentUser.action")
	public @ResponseBody Map<String,? extends Object> currentUser() throws Exception {

		try{
			
			ResultObject result = userService.get(userSession);
			User user = (User)result.getData().get(0);
			user.setPermissions(new HashSet<Permission>(userService.getUserPermissions(user)));
			
			return result.toMap();
			
		} catch (Exception e) {

			return ExtJSReturn.mapError("Error retrieving Groups from database.");
		}
	}*/
	

}
