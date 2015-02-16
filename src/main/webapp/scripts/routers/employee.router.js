define([ 'backbone', 'event-managers/employee.eventmanager',
		'views/employee.view' ], function(Backbone, eventManager, EmployeeView) {
	var AppRouter = Backbone.Router.extend({
		routes : {
			'' : 'employeeApplication'
		},
		initialize : function(options) {
			this.models = options.models;
		},
		employeeApplication : function() {
			try {
				// render shopping application view
				var employeeView = new EmployeeView({
					models : this.models,
					eventManager : eventManager
				});
				$('#_container').html(employeeView.render().el);
			} catch (e) {
				console.log(e);
			}
		}
	});
	return AppRouter;
});