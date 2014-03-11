package com.jrdevel.aboutus.web.util;

import java.util.List;
import java.util.Set;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.core.convert.converter.Converter;
import org.springframework.format.FormatterRegistry;
import org.springframework.format.support.FormattingConversionServiceFactoryBean;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.jrdevel.aboutus.core.common.model.Group;
import com.jrdevel.aboutus.core.common.model.Permission;
import com.jrdevel.aboutus.core.common.to.Filter;

/**
 * @author Raphael Domingues
 *
 */
public class AboutUsJsonConverter extends FormattingConversionServiceFactoryBean{

	private Log log = LogFactory.getLog(this.getClass());

	@Override
	protected void installFormatters(FormatterRegistry registry) {
		super.installFormatters(registry);
		registry.addConverter(convertFilter());
		registry.addConverter(convertPermissions());
		registry.addConverter(convertGroups());
	}

	public Converter<String, List<Filter>> convertFilter() {
		return new Converter<String, List<Filter>>() {

			@Override
			public List<Filter> convert(String source) {
				ObjectMapper mapper = new ObjectMapper();
				List<Filter> myTypeList = null;
				try {
					myTypeList = mapper.readValue(source, new TypeReference<List<Filter>>() {});
				} catch (Exception e) {
					if(log.isErrorEnabled())
						log.error("Error converting JSON collection to List<MyType>.", e);
				}
				return myTypeList;
			}
		};
	}

	public Converter<String, Set<Permission>> convertPermissions() {
		return new Converter<String,  Set<Permission>>() {

			@Override
			public  Set<Permission> convert(String source) {
				ObjectMapper mapper = new ObjectMapper();
				Set<Permission> myTypeList = null;
				try {
					myTypeList = mapper.readValue(source, new TypeReference< Set<Permission>>() {});
				} catch (Exception e) {
					if(log.isErrorEnabled())
						log.error("Error converting JSON collection to List<MyType>.", e);
				}
				return myTypeList;
			}
		};
	}
	
	public Converter<String, Set<Group>> convertGroups() {
		return new Converter<String,  Set<Group>>() {

			@Override
			public  Set<Group> convert(String source) {
				ObjectMapper mapper = new ObjectMapper();
				Set<Group> myTypeList = null;
				try {
					myTypeList = mapper.readValue(source, new TypeReference< Set<Group>>() {});
				} catch (Exception e) {
					if(log.isErrorEnabled())
						log.error("Error converting JSON collection to List<MyType>.", e);
				}
				return myTypeList;
			}
		};
	}


}
