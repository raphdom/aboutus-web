package com.jrdevel.aboutus.web.controller;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.jrdevel.aboutus.core.authentication.UserDetailsAdapter;
import com.jrdevel.aboutus.core.cloud.FolderService;
import com.jrdevel.aboutus.core.cloud.FolderWrapper;

/**
 * @author Raphael Domingues
 *
 */
@Controller
public class FolderController {
	
	@Autowired
	private FolderService folderService;
	
	@RequestMapping(value="/folder/view.action")
	public @ResponseBody FolderWrapper view(HttpSession session) throws Exception {

		try{
			
			UserDetailsAdapter user = (UserDetailsAdapter) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
			
			FolderWrapper result = folderService.getFoldersPermited(user.getUser());
			
			return result;
			
		} catch (Exception e) {
			
			return null;
			
		}
	}
	

}
