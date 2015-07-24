// $(document).ready(function() {

$(function() {

    // compile blog template
  $template = _.template($('#bars-template').html());

  //get all archived events posts
  var all = function () {
    $.get('/api/events', function(data) {
      // console.log("Fetching all events")
      var allEvents = data;
     // console.log(allEvents);
      //iterate through all events
      _.each(allEvents, function(allEvents) {
        //pass each event through template to append to view 
        //var $eventHtml = $(template({bar: data}));
        // console.log("A Event", $eventHtml);
        // console.log("CONT 4 events", $("#current-bars"))
        $("#current-bars").append($template(allEvents))
      });
    });
  }
  all();


  $('#bars-form').on('submit',function(event){

    event.preventDefault();
    // console.log("test")
    var Event = {
      //img_url: $('#entry-img').val(),
      name: $('#entry-name').val(),
      address: $('#entry-address').val(),
      city_state: $('#entry-citystate').val(),
      zip: $('#entry-zip').val(),
      phone: $('#entry-phone').val()
    }
    console.log(Event);
    $.post('/api/events', Event, function (data){
      $('#current-bars').append($template(data))
      $('#bars-form')[0].reset();

    })
  })

})



  
