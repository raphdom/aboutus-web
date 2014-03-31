package com.jrdevel.aboutus.web.controller;

import java.util.Map;

import javax.servlet.http.HttpSession;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.jrdevel.aboutus.core.authentication.UserDetailsAdapter;
import com.jrdevel.aboutus.core.cloud.FolderService;
import com.jrdevel.aboutus.core.cloud.FolderWrapper;
import com.jrdevel.aboutus.core.common.model.Folder;
import com.jrdevel.aboutus.core.common.to.ResultObject;
import com.jrdevel.aboutus.core.util.ExtJSReturn;

/**
 * @author Raphael Domingues
 *
 */
@Controller
@RequestMapping(value="/folder")
public class FolderController {
	
	private static final Logger logger = Logger.getLogger(FolderController.class);
	
	@Autowired
	private FolderService folderService;
	
	@RequestMapping(value="/view.action")
	public @ResponseBody FolderWrapper view(HttpSession session) throws Exception {

		try{
			
			UserDetailsAdapter user = (UserDetailsAdapter) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
			
			FolderWrapper result = folderService.getFoldersPermited(user.getUser());
			
			return result;
			
		} catch (Exception e) {
			
			return null;
			
		}
	}
	
	@RequestMapping(value="/save.action")
	public @ResponseBody Map<String,? extends Object> save(@RequestBody FolderWrapper folder) throws Exception {

		try{
			
			Folder bean = new Folder();
			bean.setName(folder.getText());
			bean.setParent(folder.getParent());
			
			ResultObject result = null;
			
			if (folder.getId() != 0){
				result = folderService.update(bean);
			}else{
				result = folderService.insert(bean);
			}

			return result.toMap();
			
		} catch (Exception e) {
			
			logger.error(e.getMessage());
			
			return ExtJSReturn.mapError("Error updating Folder from database.");
			
		}
	}
	

}
