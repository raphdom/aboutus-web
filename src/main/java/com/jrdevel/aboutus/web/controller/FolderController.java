package com.jrdevel.aboutus.web.controller;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.jrdevel.aboutus.core.model.User;
import com.jrdevel.aboutus.core.service.FolderService;
import com.jrdevel.aboutus.core.util.FolderWrapper;

/**
 * @author Raphael Domingues
 *
 */
public class FolderController {
	
	private FolderService folderService;
	
	private User userSession;
	
	public void setGroupService(FolderService folderService) {
		this.folderService = folderService;
	}
	
	
	@RequestMapping(value="/folder/view.action")
	public @ResponseBody FolderWrapper view(HttpSession session) throws Exception {

		try{
			
			FolderWrapper result = folderService.getFoldersPermited(userSession);
			
			return result;
			
		} catch (Exception e) {
			
			return null;

			//return ExtJSReturn.mapError("Error retrieving Groups from database.");
		}
	}
	

}
