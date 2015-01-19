package com.jrdevel.aboutus.web.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpSession;

import net.aboutchurch.common.to.ListResult;
import net.aboutchurch.common.to.ResultObject;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.view.RedirectView;

import com.jrdevel.aboutus.core.authentication.AuthenticationService;
import com.jrdevel.aboutus.core.authentication.UserDetailsAdapter;
import com.jrdevel.aboutus.core.common.model.Permission;
import com.jrdevel.aboutus.core.common.model.Register;
import com.jrdevel.aboutus.core.common.model.User;
import com.jrdevel.aboutus.core.util.ExtJSReturn;

/**
 * @author Raphael Domingues
 *
 */
@Controller
public class AuthenticationController {

	@Autowired
	private AuthenticationService authenticationService;
	
	@Autowired
	private User userSession;

	@RequestMapping(value="/register.action")
	public @ResponseBody Map<String,? extends Object> register(Register register, HttpSession session) throws Exception {

		try{

			ResultObject result = authenticationService.register(register);

			return result.toMap();

		} catch (Exception e) {

			return ExtJSReturn.mapError("O Email n�o existe registado no sistema!");
		}
	}
	
	@RequestMapping(value="/getUserAuthenticated.action")
	public @ResponseBody Map<String,? extends Object> getUserRoles() throws Exception {

		try{
			
			UserDetailsAdapter userAdapter = (UserDetailsAdapter) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
			List<String> permissions = new ArrayList<String>();
			for(Permission permission : userAdapter.getRoles()){
				permissions.add(permission.getName());
			}
			HashMap<String, Object> result = new HashMap<String,Object>();
			result.put("id", userAdapter.getId());
			result.put("email", userAdapter.getUsername());
			result.put("name", userAdapter.getUser().getPerson().getName());
			if (userAdapter.getUser().getFile()!=null){
				result.put("avatarId", userAdapter.getUser().getFile().getId());
			}
			result.put("permissions", permissions);
			
			return result;
			
		} catch (Exception e) {

			return ExtJSReturn.mapError("Error retrieving Permissions from database.");
		}
	}
	
	@RequestMapping(value="/getCurrentUser.action")
	public @ResponseBody Map<String,? extends Object> getCurrentUser() throws Exception {

		try{
			
			UserDetailsAdapter user = (UserDetailsAdapter) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
			
			ListResult<Permission> listResult = new ListResult<Permission>(user.getRoles());
			
			return ExtJSReturn.mapOK(listResult);
			
		} catch (Exception e) {

			return ExtJSReturn.mapError("Error retrieving Permissions from database.");
		}
	}
	
	@RequestMapping(value="/recoverPassword.action")
	public @ResponseBody Map<String,? extends Object> recoverPassword(@RequestParam String email) throws Exception {

		try{
			
			ResultObject result = authenticationService.recoverPassword(email);
			
			return result.toMap();
			
		} catch (Exception e) {

			return ExtJSReturn.mapError("Error Recover Password.");
			
		}
	}

	@RequestMapping(value="/logout.action")
	public ModelAndView logout(HttpSession session){
		session.setAttribute("scopedTarget.userSession", null);
		return new ModelAndView(new RedirectView("")); 
	}
	
	@RequestMapping(value="/keepAlive.action")
	public ModelAndView keepAlive(HttpSession session){
		return null; 
	}
	
	@RequestMapping(value="/listPermissions.action")
	public @ResponseBody Map<String,? extends Object> listPermissions() throws Exception {
		
		ResultObject result = authenticationService.listPermissions();
		
		return result.toMap();
		
	}

}
