package com.jrdevel.aboutus.web.controller;

import java.util.Locale;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.annotation.Secured;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.LocaleResolver;
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
	
	@Autowired
	private LocaleResolver localeResolver;
	
	@RequestMapping(value="/home.action", method = RequestMethod.GET)
	public ModelAndView home(HttpServletRequest _request, HttpServletResponse _response, HttpSession session) throws Exception {
		
		UserDetailsAdapter user = (UserDetailsAdapter) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
		
		authenticationService.updateLogin(user.getId());
		
		// TODO RAD get locale in user preferences
        localeResolver.setLocale(_request, _response, new Locale("pt_PT"));
		
		return new ModelAndView("home");
		
	}
	
	@RequestMapping(value="/login.action")
	public String login(HttpServletRequest _request, HttpServletResponse _response, HttpSession session) throws Exception {
		
		return "login";
		
	}

}
