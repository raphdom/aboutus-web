package com.jrdevel.aboutus.web.controller.site;

import java.util.List;
import java.util.Map;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.jrdevel.aboutus.core.common.helper.MessageHelper;
import com.jrdevel.aboutus.core.common.to.ListParams;
import com.jrdevel.aboutus.core.common.to.ResultObject;
import com.jrdevel.aboutus.core.site.video.VideoDTO;
import com.jrdevel.aboutus.core.site.video.VideoService;
import com.jrdevel.aboutus.core.util.ExtJSReturn;

@RequestMapping(value="/site/video")
@Controller
public class VideoController {
	
	
	private static final Logger logger = Logger.getLogger(VideoController.class);
	
	@Autowired
	private VideoService videoService;
	
	@RequestMapping(value="/view.action")
	public @ResponseBody Map<String,? extends Object> view(ListParams input) throws Exception {

		
		ResultObject result = videoService.list(input);
		
		return result.toMap();
		
	}
	
	@RequestMapping(value="/get.action")
	public @ResponseBody Map<String,? extends Object> get(Integer id) throws Exception {

		try{
			
			ResultObject result = videoService.get(id);
			
			return result.toMap();
			
		} catch (Exception e) {
			
			logger.error(e);

			return ExtJSReturn.mapError(MessageHelper.genericErrorMessage());
		}
	}
	
	@RequestMapping(value="/save.action", method = RequestMethod.POST)
	public @ResponseBody Map<String,? extends Object> save(@RequestBody VideoDTO dto) throws Exception {

		try{

			ResultObject result = null;

			result = videoService.save(dto);
			
			return result.toMap();
			
		} catch (Exception e) {
			
			logger.error(e);
			
			return ExtJSReturn.mapError(MessageHelper.genericErrorMessage());
		}
	}
	
	@RequestMapping(value="/delete.action")
	public @ResponseBody Map<String,? extends Object> delete(@RequestBody List<Integer> ids) throws Exception {

		try{
			
			ResultObject result = videoService.delete(ids);
			
			return result.toMap();
			
		} catch (Exception e) {

			return ExtJSReturn.mapError(MessageHelper.genericErrorMessage());
		}
	}
	
}
