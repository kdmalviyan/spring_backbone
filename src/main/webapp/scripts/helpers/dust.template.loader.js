define([ 'dust' ], function(dust) {

	return {
		/**
		 * Load a template into dust. Template can either be precompiled or a
		 * raw dust string template.
		 * 
		 * This method can also be called to render inline dust from view files.
		 * 
		 * @param template
		 * @param name
		 * @returns
		 */
		load : function(template, name) {
			if (typeof template === 'string') {
				if (template.indexOf('(function(){dust.register') === 0) {
					dust.loadSource(template);
				} else {
					dust.loadSource(dust.compile(template, name));
				}
			} else {

			}
		},
		render : function(name, context) {
			var retVal = '';
			if (typeof name !== 'undefined' && name !== null && name !== '') {
				dust.render(name, context, function(err, out) {
					retVal = out;
					if (err) {
						console
								.log("Error while loading dust template: "
										+ err);
					}
				});
			}
			return retVal;
		}
	};
});