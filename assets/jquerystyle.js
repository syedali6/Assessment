$(".card").swipe( {
    swipeLeft:function(event, direction, distance, duration, fingerCount) {
         $(".nav-tabs li.active").next('li').find('a').tab('show');
       },
    swipeRight:function(event, direction, distance, duration, fingerCount) {
         $(".nav-tabs li.active").prev('li').find('a').tab('show');
       },
 });

 $(function() {
  var $wrapper = $('.clonedata'),
      $addButton = $wrapper.find('.adddiv'),
      $itemToClone = $wrapper.find('.itemToClone'),
      counter = 0; // Counter for generating unique IDs

  $addButton.on('click', function() {
    var $clonedItem = $itemToClone.clone();
    var uniqueID = 'uniqueID_' + counter; // Creating a unique ID
    $clonedItem.attr('id', uniqueID); // Assigning the unique ID to the cloned element
    counter++; // Incrementing counter for the next ID

    $clonedItem.appendTo(".testdata").show();
    
    $("#"+uniqueID).removeClass('savedatasinsamp');
  });

  $wrapper.on('click', '.close', function() {
    var $item = $(this).parents('.clean').first();
    $item.remove();
  });
});

$(function() {
$(".savadata").on("click", function() {
  $(".itemToClone").addClass('savedatasinsamp');
})
});

$(document).ready(function () {
  $(".style-button").on("click", function () {
      var styleClass = $(this).attr("class");
      $(".buttonchange").removeClass().addClass("buttonchange  mb-0 ");
      $(".buttonchange").addClass(styleClass);
      $(".activedivs").removeClass("activedivsset");          
     $(this).parent('.activedivs').addClass("activedivsset");
  });
});


$(document).ready(function () {
  $(document).on('click', '.editable', function (event) {
      event.stopPropagation(); // Prevent click propagation to document

      var $this = $(this);

      var originalText = $this.text();
      var inputElement = $('<input type="text">').val(originalText);

      $this.html(inputElement);

      inputElement.focus();

      inputElement.blur(function () {
          var newText = $(this).val();
          $this.text(newText);
      });

      // Handle clicks outside the editable area
      $(document).on('click.editable', function (event) {
          if (!$.contains($this[0], event.target)) {
              inputElement.blur();
              $(document).off('click.editable'); // Remove the click event handler once it's triggered
          }
      });
  });
});