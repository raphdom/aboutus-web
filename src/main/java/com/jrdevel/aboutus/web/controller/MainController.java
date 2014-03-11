package com.jrdevel.aboutus.web.controller;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.jrdevel.aboutus.core.common.model.User;

/**
 * @author Raphael Domingues
 *
 */
@Controller
public class MainController {
	
	@Autowired
	private User userSession;
	
	@RequestMapping(value="/home.action")
	public ModelAndView home(HttpSession session) throws Exception {
		
		if (userSession.getId()==null){
			return new ModelAndView("login");
		}else{
			return new ModelAndView("home");
		}
		
	}

}
