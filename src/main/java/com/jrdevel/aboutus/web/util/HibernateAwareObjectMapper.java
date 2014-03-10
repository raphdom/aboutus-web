package com.jrdevel.aboutus.web.util;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.datatype.hibernate3.Hibernate3Module;

/**
 * @author Raphael Domingues
 *
 */
public class HibernateAwareObjectMapper extends ObjectMapper{
	
	public HibernateAwareObjectMapper() {
        registerModule(new Hibernate3Module());
    }

}
