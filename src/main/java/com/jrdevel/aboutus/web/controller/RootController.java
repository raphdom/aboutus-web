package com.jrdevel.aboutus.web.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.LocaleResolver;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.support.RequestContextUtils;

import com.jrdevel.aboutus.core.authentication.AuthenticationService;
import com.jrdevel.aboutus.core.authentication.UserDetailsAdapter;

/**
 * @author Raphael Domingues
 *
 */
@Controller
@RequestMapping("/")
public class RootController {
	
	@Autowired
	private AuthenticationService authenticationService;
	
	@Autowired
	private Environment env;
	
	@RequestMapping(method=RequestMethod.GET)
	public ModelAndView index(HttpServletRequest _request, HttpServletResponse _response, HttpSession session) throws Exception {
		
		String viewName = "home";
		
		ModelAndView model = new ModelAndView();
		
		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
		if (authentication == null || (authentication instanceof AnonymousAuthenticationToken)) {
			viewName = "login";
		}else{
			
			UserDetailsAdapter user = (UserDetailsAdapter) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
			
			authenticationService.updateLogin(user.getId());
			
		    LocaleResolver localeResolver = RequestContextUtils.getLocaleResolver(_request);
			
		    String userLocale = user.getLocale();
	        localeResolver.setLocale(_request, _response, StringUtils.parseLocaleString(userLocale));
	        
		}
		
		model.addObject("activeEnv", env.getActiveProfiles()[0]);
		model.setViewName(viewName);
		
		return model;
		
	}

}
