package com.jrdevel.aboutus.web.controller;

import java.util.List;
import java.util.Map;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.jrdevel.aboutus.core.common.helper.MessageHelper;
import com.jrdevel.aboutus.core.common.to.ListParams;
import com.jrdevel.aboutus.core.common.to.ResultObject;
import com.jrdevel.aboutus.core.user.ProfileDTO;
import com.jrdevel.aboutus.core.user.UserDTO;
import com.jrdevel.aboutus.core.user.UserService;
import com.jrdevel.aboutus.core.util.ExtJSReturn;

@RequestMapping(value="/user")
@Controller
public class UserController {
	
	
	private static final Logger logger = Logger.getLogger(UserController.class);
	
	@Autowired
	private UserService userService;
	
	@Autowired
	private MessageHelper messageHelper;
	
	@RequestMapping(value="/view.action")
	public @ResponseBody Map<String,? extends Object> view(ListParams input) throws Exception {

		
		ResultObject result = userService.list(input);
		
		return result.toMap();
		
		/*try{
			
			
			
		} catch (Exception e) {
			
			logger.error(e);
			
			return ExtJSReturn.mapError(messageHelper.genericErrorMessage());
		}*/
	}
	
	@RequestMapping(value="/get.action")
	public @ResponseBody Map<String,? extends Object> get(Integer id) throws Exception {

		try{
			
			ResultObject result = userService.get(id);
			
			return result.toMap();
			
		} catch (Exception e) {
			
			logger.error(e);

			return ExtJSReturn.mapError(messageHelper.genericErrorMessage());
		}
	}
	
	@RequestMapping(value="/save.action", method = RequestMethod.POST)
	public @ResponseBody Map<String,? extends Object> save(@RequestBody UserDTO userDTO) throws Exception {

		try{

			ResultObject result = null;

			result = userService.save(userDTO);
			
			return result.toMap();
			
		} catch (Exception e) {
			
			logger.error(e);
			
			return ExtJSReturn.mapError(messageHelper.genericErrorMessage());
		}
	}
	
	@RequestMapping(value="/delete.action")
	public @ResponseBody Map<String,? extends Object> delete(@RequestBody List<Integer> ids) throws Exception {

		try{
			
			ResultObject result = userService.delete(ids);
			
			return result.toMap();
			
		} catch (Exception e) {

			return ExtJSReturn.mapError(messageHelper.genericErrorMessage());
		}
	}
	
	@RequestMapping(value="/getProfile.action")
	public @ResponseBody Map<String,? extends Object> getCurrentProfile() throws Exception {
		
		ResultObject result = userService.getCurrentProfile();
		
		return result.toMap();
		
	}
	
	
	@RequestMapping(value="/updateProfile.action", method = RequestMethod.POST)
	public @ResponseBody Map<String,? extends Object> updateProfile(@RequestBody ProfileDTO profile) throws Exception {
	
		ResultObject result = null;

		result = userService.updateProfile(profile);

		return result.toMap();
		
	}
	
	
	@RequestMapping(value="/changePassword.action", method = RequestMethod.POST)
	public @ResponseBody Map<String,? extends Object> changePassword(@RequestParam String passActual, @RequestParam String passNew) throws Exception {
	
		ResultObject result = null;

		result = userService.changePassword(passActual, passNew);

		return result.toMap();
		
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
