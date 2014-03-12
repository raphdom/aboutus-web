package com.jrdevel.aboutus.web.util;

import java.io.IOException;
import java.io.Writer;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpServletResponseWrapper;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.RedirectStrategy;
import org.springframework.security.web.authentication.SavedRequestAwareAuthenticationSuccessHandler;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

/**
 * @author Raphael Domingues
 *
 */
public class CustomAjaxAuthenticationFilter extends UsernamePasswordAuthenticationFilter {

	@Override
	protected void successfulAuthentication(HttpServletRequest request,
			HttpServletResponse response, Authentication authResult)
					throws IOException, ServletException {

		//create a blank redirect strategy to prevent Spring automatically returning
		// page content in the output stream.
		SavedRequestAwareAuthenticationSuccessHandler srh = new SavedRequestAwareAuthenticationSuccessHandler();
		this.setAuthenticationSuccessHandler(srh);
		srh.setRedirectStrategy(new RedirectStrategy() {
			@Override
			public void sendRedirect(HttpServletRequest httpservletrequest,
					HttpServletResponse httpservletresponse, String s) throws IOException {
				//do nothing, no redirect
			}
		});
		super.successfulAuthentication(request, response, authResult);

		HttpServletResponseWrapper responseWrapper = new HttpServletResponseWrapper(response);
		Writer out = responseWrapper.getWriter();
		out.write("{success:true}");
		out.close();
	}
	@Override
	protected void unsuccessfulAuthentication(HttpServletRequest request,
			HttpServletResponse response, AuthenticationException failed)
					throws IOException, ServletException {

		HttpServletResponseWrapper responseWrapper = new HttpServletResponseWrapper(response);
		Writer out = responseWrapper.getWriter();
		out.write("{success: false, errors: '" + failed.getMessage() + "'}");
		out.close();

	}
}
