define([ 'backbone', 'event-managers/employee.eventmanager', 'dustLoader',
		'text!html/view.employee.dust','dust' ], function(Backbone, eventManager,
		dustLoader, employeeTemplate) {
	dustLoader.load(employeeTemplate, "view.employee.dust");
	var EmployeeView = Backbone.View.extend({
		events : {},
		initialize : function(options) {
			this.eventManager = options.eventManager;
			this.models = options.models;
		},
		render : function() {
			try {
				data = {};
				data.userId = this.models.userId;
				data.jobTitleName = this.models.jobTitleName;
				data.firstName = this.models.firstName;
				data.lastName = this.models.lastName;
				data.preferredFullName = this.models.preferredFullName;
				data.employeeCode = this.models.employeeCode;
				data.phoneNumber = this.models.phoneNumber;
				data.region = this.models.region;
				data.emailAddress = this.models.emailAddress;
				this.$el.html(dustLoader.render('view.employee.dust', data));
				return this;
			} catch (e) {
				console.log(e);
			}
		}
	});
	return EmployeeView;
});