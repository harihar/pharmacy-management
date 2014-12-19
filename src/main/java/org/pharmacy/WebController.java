package org.pharmacy;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class WebController {

	@RequestMapping(value = "/")
	public String sayHello() {
		return "login";
	}

	@RequestMapping(value = "/login")
	public @ResponseBody
	String login() {
		System.out.println("Login successful");
		return "login successful";
	}
}
