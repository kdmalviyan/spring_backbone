<!DOCTYPE html>
<html class="ui-mobile-rendering">
<head>
<title>Home</title>
<meta name="viewport" content="width=device-width, initial-scale=1">

<!-- The Scripts -->
<script src="scripts/lib/require.js"></script>

<script>
	if (localStorage) {
		var locale = localStorage.getItem('locale') || 'en';
	} else {
		var locale = 'es';
	}
	require([ 'require', 'scripts/employee.app.main' ], function() {
		require([ 'controllers/employee.controller' ], function(
				EmployeeController) {
			return EmployeeController.initialize();
		});
	});
</script>
</head>
<body>
	<div id="_container"></div>
</body>
</html>