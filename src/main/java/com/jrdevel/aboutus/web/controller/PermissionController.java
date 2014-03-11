package com.jrdevel.aboutus.web.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.jrdevel.aboutus.core.common.model.Permission;
import com.jrdevel.aboutus.core.common.to.ListParams;
import com.jrdevel.aboutus.core.common.to.ListResult;
import com.jrdevel.aboutus.core.user.PermissionService;
import com.jrdevel.aboutus.core.util.ExtJSReturn;

/**
 * @author Raphael Domingues
 *
 */
public class PermissionController {
	
	private PermissionService permissionService;
	
	public void setPermissionService(PermissionService permissionService) {
		this.permissionService = permissionService;
	}
	
	
	@RequestMapping(value="/permission/view.action")
	public @ResponseBody Map<String,? extends Object> view(ListParams input) throws Exception {

		try{
			
			ListResult<Permission> result = permissionService.getList(input);
			
			return ExtJSReturn.mapOK(result.getData(),result.getTotal());
			
		} catch (Exception e) {

			return ExtJSReturn.mapError("Error retrieving Permissions from database.");
		}
	}

}
