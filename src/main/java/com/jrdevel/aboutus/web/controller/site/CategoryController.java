package com.jrdevel.aboutus.web.controller.site;

import java.util.List;
import java.util.Map;

import net.aboutchurch.common.dto.CategoryDTO;
import net.aboutchurch.common.dto.CategoryListDTO;
import net.aboutchurch.common.dto.NodeDTO;
import net.aboutchurch.common.to.ListParams;
import net.aboutchurch.common.to.ResultObject;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.jrdevel.aboutus.core.site.category.CategoryService;

@RequestMapping(value="/site/category")
@Controller
public class CategoryController {
	
	
	private static final Logger logger = Logger.getLogger(CategoryController.class);
	
	@Autowired
	private CategoryService service;
	
	@RequestMapping(value="/view.action")
	public @ResponseBody NodeDTO view(ListParams input) throws Exception {

		
		List<CategoryListDTO> categories = service.list(input);
		
		CategoryListDTO root = new CategoryListDTO();
		
		root.setChildren(categories);
		
		return root;
		
	}
	
	@RequestMapping(value="/get.action")
	public @ResponseBody Map<String,? extends Object> get(Integer id) throws Exception {

		ResultObject result = service.get(id);

		return result.toMap();
			
	}
	
	@RequestMapping(value="/save.action", method = RequestMethod.POST)
	public @ResponseBody Map<String,? extends Object> save(@RequestBody CategoryDTO categoryDTO) throws Exception {

		ResultObject result = null;

		result = service.save(categoryDTO);
			
		return result.toMap();
			
	}
	
	@RequestMapping(value="/delete.action")
	public @ResponseBody Map<String,? extends Object> delete(@RequestBody List<Integer> ids) throws Exception {

		ResultObject result = service.delete(ids);

		return result.toMap();
			
	}
	
}
