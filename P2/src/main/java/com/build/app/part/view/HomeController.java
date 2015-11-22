package com.build.app.part.view;

import java.text.DateFormat;
import java.util.Date;
import java.util.Locale;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

/**
 * Handles requests for the application home page.
 */
@Controller
public class HomeController {
 
	private static final Logger logger = LoggerFactory
			.getLogger(HomeController.class);
 
	/**
	 * Simply selects the home view to render by returning its name.
	 */
	@RequestMapping(value = { "/home" }, method = RequestMethod.GET)
	public String homePage(Locale locale, Model model) {
		logger.info("Welcome home! The client locale is {}.", locale);

		Date date = new Date();
		DateFormat dateFormat = DateFormat.getDateTimeInstance(DateFormat.LONG,
				DateFormat.LONG, locale);

		String formattedDate = dateFormat.format(date);

		model.addAttribute("serverTime", formattedDate);

		return "home";
	}
	
	@RequestMapping(value = { "/denied" }, method = RequestMethod.GET)
	public String deniedPage(Locale locale, Model model) {
		logger.info("Welcome home! The client locale is {}.", locale);

		Date date = new Date();
		DateFormat dateFormat = DateFormat.getDateTimeInstance(DateFormat.LONG,
				DateFormat.LONG, locale);

		String formattedDate = dateFormat.format(date);

		model.addAttribute("serverTime", formattedDate);

		return "ddenied";
	}
	
	@RequestMapping(value = { "/overview" }, method = RequestMethod.GET)
	public String overViewPage(Locale locale, Model model) {
		logger.info("Welcome home! The client locale is {}.", locale);

		Date date = new Date();
		DateFormat dateFormat = DateFormat.getDateTimeInstance(DateFormat.LONG,
				DateFormat.LONG, locale);

		String formattedDate = dateFormat.format(date);

		model.addAttribute("serverTime", formattedDate);

		return "overview";
	}

	

	@RequestMapping(value = "/view**", method = RequestMethod.GET)
	public ModelAndView adminPage() {

		ModelAndView model = new ModelAndView();
		model.addObject("title", "Spring Security Custom Login Form");
		model.addObject("message", "This is protected page!");
		model.setViewName("admin");

		return model;

	}

	@RequestMapping(value = "/header", method = RequestMethod.GET)
	public ModelAndView headerPage() {

		ModelAndView model = new ModelAndView();
		model.addObject("title", "Spring Security Custom Login Form");
		model.addObject("message", "This is protected page!");
		model.setViewName("header");

		return model;

	}
	
		
	@RequestMapping(value = "/logout", method = RequestMethod.GET)
	public ModelAndView loginPage() {

		ModelAndView model = new ModelAndView();
		model.addObject("title", "Spring Security Custom Login Form");
		model.addObject("message", "This is protected page!");
		model.setViewName("login");

		return model;

	}

	// Spring Security see this :
	@RequestMapping(value = {"/"}, method = RequestMethod.GET)
	public ModelAndView login(
			@RequestParam(value = "error", required = false) String error,
			@RequestParam(value = "logout", required = false) String logout,
			HttpServletRequest request, HttpServletResponse response) {

		ModelAndView model = new ModelAndView();
		if (error != null) {
			model.addObject("error", "Invalid username and password!");
		}

		if (logout != null) {
			Cookie[] cookies = request.getCookies();
			if (cookies != null)
				for (int i = 0; i < cookies.length; i++) {
					cookies[i].setMaxAge(0);
				}
			model.addObject("msg", "You've been logged out successfully.");
		}
		model.setViewName("login");

		return model;

	}

	@RequestMapping(value = { "/login" }, method = RequestMethod.GET)
	public ModelAndView logout(
			@RequestParam(value = "error", required = false) String error,
			@RequestParam(value = "logout", required = false) String logout,
			HttpServletRequest request, HttpServletResponse response) {
		System.out.println(" logout called.....");
		ModelAndView model = new ModelAndView();
		if (error != null) {
			model.addObject("error", "Invalid username and password!");
		}

		if(logout!=null){
		Cookie[] cookies = request.getCookies();
		if (cookies != null)
			for (int i = 0; i < cookies.length; i++) {
				cookies[i].setMaxAge(0);
			}
			model.addObject("msg", "You've been logged out successfully.");
		}

		model.setViewName("login");

		return model;

	}
	
	@RequestMapping(value = { "/create_car" }, method = RequestMethod.GET)
	public ModelAndView createCar(){
		
		ModelAndView model = new ModelAndView();
		model.addObject("test", "helooooooooooooooooo");
		model.setViewName("/car/info");
		return model;
	}
	
	@RequestMapping(value = { "/create_model" }, method = RequestMethod.GET)
	public ModelAndView createModel(){
		
		ModelAndView model = new ModelAndView();
		
		return model;
	}
	
	@RequestMapping(value = { "/create_part" }, method = RequestMethod.GET)
	public ModelAndView createPart(){
		
		ModelAndView model = new ModelAndView();
		
		return model;
	}
		

}
