define([ 'backbone', 'routers/employee.router',
		'event-managers/employee.eventmanager' ], function(Backbone, Router,
		eventManager) {
	var initialize = function() {
		/*
		 * var dataModels = Backbone.Model.extend({}); new Router({ models :
		 * dataModels }); // start URL history Backbone.history.start();
		 * eventManager.trigger('view:startEmployeeApplication');
		 */

		var employeeHomeUrl = 'employeeHome';
		$.ajax({
			url : employeeHomeUrl,
			type : 'post',
			data : {},
			dataType : 'json',
			success : function(data) {

				var dataModels = Backbone.Model.extend({});
				dataModels.userId = data.userId;
				dataModels.jobTitleName = data.jobTitleName;
				dataModels.firstName = data.firstName;
				dataModels.lastName = data.lastName;
				dataModels.preferredFullName = data.preferredFullName;
				dataModels.employeeCode = data.employeeCode;
				dataModels.phoneNumber = data.phoneNumber;
				dataModels.region = data.region;
				dataModels.emailAddress = data.emailAddress;
				new Router({
					models : dataModels
				}); // start URL history
				Backbone.history.start();
				eventManager.trigger('view:startEmployeeApplication');
			}
		});

	};

	return {
		initialize : initialize
	};
});