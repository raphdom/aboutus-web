package com.jrdevel.aboutus.web.controller.music;

import java.util.List;
import java.util.Map;

import net.aboutchurch.common.to.ListParams;
import net.aboutchurch.common.to.ResultObject;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.jrdevel.aboutus.core.common.helper.MessageHelper;
import com.jrdevel.aboutus.core.music.playlist.PlaylistDTO;
import com.jrdevel.aboutus.core.music.playlist.PlaylistService;
import com.jrdevel.aboutus.core.util.ExtJSReturn;

@RequestMapping(value="/music/playlist")
@Controller
public class PlaylistController {
	
	
	private static final Logger logger = Logger.getLogger(PlaylistController.class);
	
	@Autowired
	private PlaylistService playlistService;
	
	@RequestMapping(value="/view.action")
	public @ResponseBody Map<String,? extends Object> view(ListParams input) throws Exception {

		
		ResultObject result = playlistService.list(input);
		
		return result.toMap();
		
	}
	
	@RequestMapping(value="/get.action")
	public @ResponseBody Map<String,? extends Object> get(Integer id) throws Exception {

		try{
			
			ResultObject result = playlistService.get(id);
			
			return result.toMap();
			
		} catch (Exception e) {
			
			logger.error(e);

			return ExtJSReturn.mapError(MessageHelper.genericErrorMessage());
		}
	}
	
	@RequestMapping(value="/save.action", method = RequestMethod.POST)
	public @ResponseBody Map<String,? extends Object> save(@RequestBody PlaylistDTO dto) throws Exception {

		try{

			ResultObject result = null;

			result = playlistService.save(dto);
			
			return result.toMap();
			
		} catch (Exception e) {
			
			logger.error(e);
			
			return ExtJSReturn.mapError(MessageHelper.genericErrorMessage());
		}
	}
	
	@RequestMapping(value="/delete.action")
	public @ResponseBody Map<String,? extends Object> delete(@RequestBody List<Integer> ids) throws Exception {

		try{
			
			ResultObject result = playlistService.delete(ids);
			
			return result.toMap();
			
		} catch (Exception e) {

			return ExtJSReturn.mapError(MessageHelper.genericErrorMessage());
		}
	}
	
}
