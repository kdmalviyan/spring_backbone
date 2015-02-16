define([ 'backbone' ], function(Backbone) {
    var events = _.extend({}, Backbone.Events);
    events.on('view:startEmployeeApplication', function() {
        Backbone.history.navigate('', {
            trigger : true,
            replace : true
        });
    });
    return events;
});