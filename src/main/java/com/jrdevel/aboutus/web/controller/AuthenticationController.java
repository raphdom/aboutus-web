package com.jrdevel.aboutus.web.controller;

import java.util.HashSet;
import java.util.Map;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.view.RedirectView;

import com.jrdevel.aboutus.core.authentication.AuthenticationService;
import com.jrdevel.aboutus.core.authentication.UserDetailsAdapter;
import com.jrdevel.aboutus.core.common.model.Permission;
import com.jrdevel.aboutus.core.common.model.Register;
import com.jrdevel.aboutus.core.common.model.User;
import com.jrdevel.aboutus.core.common.to.ListResult;
import com.jrdevel.aboutus.core.common.to.ResultObject;
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

	@RequestMapping(value="/login.action")
	public @ResponseBody Map<String,? extends Object> login(User user, HttpSession session) throws Exception {

		try{

			ResultObject result = authenticationService.login(user);

			if (result.getData()!= null && !result.getData().isEmpty()){
				User userDB = (User) result.getData().get(0);
				userSession.setId(userDB.getId());
				userSession.setEmail(userDB.getEmail());
			}
			
			return result.toMap();

		} catch (Exception e) {
			e.printStackTrace();
			return ExtJSReturn.mapError("Erro no login");
		}
	}

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
			
			ResultObject result = new ResultObject();
			User user = new User();
			user.setId(userAdapter.getId());
			user.setEmail(userAdapter.getUsername());
			user.setPermissions(new HashSet<Permission>(userAdapter.getRoles()));
			result.setData(user);
			result.setSuccess(true);
			
			return result.toMap();
			
			//ListResult<Permission> listResult = new ListResult<Permission>(user.getRoles());
			
			//return ExtJSReturn.mapOK(listResult);
			
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

	@RequestMapping(value="/logout.action")
	public ModelAndView logout(HttpSession session){
		session.setAttribute("scopedTarget.userSession", null);
		return new ModelAndView(new RedirectView("")); 
	}

}
