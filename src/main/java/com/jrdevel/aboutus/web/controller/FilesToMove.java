package com.jrdevel.aboutus.web.controller;

import java.util.List;

/**
 * @author Raphael Domingues
 *
 */
public class FilesToMove {
	
	private List<Integer> files;
	private Integer folderId;
	
	public List<Integer> getFiles() {
		return files;
	}
	public void setFiles(List<Integer> files) {
		this.files = files;
	}
	public Integer getFolderId() {
		return folderId;
	}
	public void setFolderId(Integer folderId) {
		this.folderId = folderId;
	}

}
