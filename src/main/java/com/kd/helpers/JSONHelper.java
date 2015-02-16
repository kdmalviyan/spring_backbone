/**
 * 
 */
package com.kd.helpers;

import org.json.JSONObject;

/**
 * @author kd
 *
 */
public class JSONHelper {

	public static JSONObject createEmployeeJson() throws Exception {
		JSONObject employeeJson = new JSONObject(
				"{\"userId\":\"kd\",\"jobTitleName\":\"Developer\",\"firstName\":\"Kuldeep\",\"lastName\":\"Singh\",\"preferredFullName\":\"Singh Kuldeep\",\"employeeCode\":\"E1\",\"region\":\"Noida\",\"phoneNumber\":\"9717867415\",\"emailAddress\":\"kdmalviyan@gmail.com\" }");
		return employeeJson;
	}
}
