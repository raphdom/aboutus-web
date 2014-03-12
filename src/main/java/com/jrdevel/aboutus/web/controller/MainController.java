package com.jrdevel.aboutus.web.controller;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.jrdevel.aboutus.core.authentication.AuthenticationService;
import com.jrdevel.aboutus.core.authentication.UserDetailsAdapter;

/**
 * @author Raphael Domingues
 *
 */
@Controller
public class MainController {
	
	@Autowired
	private AuthenticationService authenticationService;
	
	@RequestMapping(value="/home.action")
	public ModelAndView home(HttpSession session) throws Exception {
		
		UserDetailsAdapter user = (UserDetailsAdapter) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
		
		authenticationService.updateLogin(user.getId());
		
		return new ModelAndView("home");
		
	}

}
