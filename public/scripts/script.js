$(function() {

  var logsController = {
    
    // compile underscore template
    template: _.template($('#log-template').html()),

    // get all logs
    all: function() {
      // AJAX call to server to GET /logs
      $.get('/api/logs', function(allLogs) {
        console.log(allLogs);
        
        // iterate through all logs
        _.each(allLogs, function(log, index) {
          console.log(log);
          
          // pass log through underscore template
          var $logHtml = $(logsController.template(log));
          console.log($logHtml);
          
          // append log HTML to page
          $('#log-list').append($logHtml);
        });
      });
    },