/**
 * 
 */
package com.kd.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.kd.helpers.JSONHelper;

/**
 * @author kd
 *
 */
@Controller
public class EmployeeController {

	@RequestMapping(value = { "/" }, method = RequestMethod.GET)
	public String startApplication() throws Exception {
		return "home";
	}

	@RequestMapping(value = { "employeeHome" }, method = RequestMethod.POST)
	@ResponseBody
	public String home() throws Exception {
		return JSONHelper.createEmployeeJson().toString();
	}

}
