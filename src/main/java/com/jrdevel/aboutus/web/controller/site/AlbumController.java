package com.jrdevel.aboutus.web.controller.site;

import java.util.List;
import java.util.Map;

import net.aboutchurch.common.dto.AlbumDTO;
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
import com.jrdevel.aboutus.core.site.album.AlbumService;
import com.jrdevel.aboutus.core.util.ExtJSReturn;

@RequestMapping(value="/site/album")
@Controller
public class AlbumController {
	
	
	private static final Logger logger = Logger.getLogger(AlbumController.class);
	
	@Autowired
	private AlbumService albumService;
	
	@RequestMapping(value="/view.action")
	public @ResponseBody Map<String,? extends Object> view(@RequestBody ListParams input) throws Exception {

		
		ResultObject result = albumService.list(input);
		
		return result.toMap();
		
		/*try{
			
			
			
		} catch (Exception e) {
			
			logger.error(e);
			
			return ExtJSReturn.mapError(messageHelper.genericErrorMessage());
		}*/
	}
	
	@RequestMapping(value="/get.action")
	public @ResponseBody Map<String,? extends Object> get(Integer id) throws Exception {

		try{
			
			ResultObject result = albumService.get(id);
			
			return result.toMap();
			
		} catch (Exception e) {
			
			logger.error(e);

			return ExtJSReturn.mapError(MessageHelper.genericErrorMessage());
		}
	}
	
	@RequestMapping(value="/save.action", method = RequestMethod.POST)
	public @ResponseBody Map<String,? extends Object> save(@RequestBody AlbumDTO dto) throws Exception {

		try{

			ResultObject result = null;

			result = albumService.save(dto);
			
			return result.toMap();
			
		} catch (Exception e) {
			
			logger.error(e);
			
			return ExtJSReturn.mapError(MessageHelper.genericErrorMessage());
		}
	}
	
	@RequestMapping(value="/delete.action")
	public @ResponseBody Map<String,? extends Object> delete(@RequestBody List<Integer> ids) throws Exception {

		try{
			
			ResultObject result = albumService.delete(ids);
			
			return result.toMap();
			
		} catch (Exception e) {

			return ExtJSReturn.mapError(MessageHelper.genericErrorMessage());
		}
	}
	
}
