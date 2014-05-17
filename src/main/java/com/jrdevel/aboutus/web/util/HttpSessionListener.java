package com.jrdevel.aboutus.web.util;

import javax.servlet.http.HttpSession;
import javax.servlet.http.HttpSessionEvent;

import org.springframework.context.ApplicationContext;
import org.springframework.stereotype.Component;
import org.springframework.web.context.support.WebApplicationContextUtils;

import com.jrdevel.aboutus.core.authentication.AuthenticationService;

/**
 * @author Raphael Domingues
 *
 */
@Component 
public class HttpSessionListener implements javax.servlet.http.HttpSessionListener{

	public void sessionCreated(HttpSessionEvent sessionEvent) {
	}

	public void sessionDestroyed(HttpSessionEvent sessionEvent) {

		HttpSession session = sessionEvent.getSession();

		ApplicationContext ctx =
				WebApplicationContextUtils.
				getWebApplicationContext(session.getServletContext());

		AuthenticationService authenticationService =
				(AuthenticationService) ctx.getBean("authenticationService");

		authenticationService.logout();

	} 

}
