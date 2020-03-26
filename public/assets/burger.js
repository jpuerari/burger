// listen for form submission 

console.log("connected to the file")

$('#burger-form').on('submit', function(event) {
  event.preventDefault();

  //collect burger data as an object
  const burgerData = {
    burger_name: $('[name=burger-name]')
      .val()
      .trim()
  };

   $.ajax({
      url: '/api/burger',
      method: 'POST',
      data: burgerData
    }).then(response => {
      console.log(response);
      location.reload();
  });
});

$('.devourBurger').on ('click', function() {
  //git id of burger we are eating
  const burgerId = $(this).attr('data-burgerid');

  $.ajax({
    url: `/api/burger/${burgerId}`,
    method: 'PUT',
    data: {
      devoured: 1
    }
  }).then(response => {
    console.log(response);
    location.reload();
  });
});

$('.deleteBurger').on('click', function() {
  // get burger id
  const burgerId = $(this).attr('data-burgerid');

  // delete burger
  $.ajax({
    url: `/api/burger/${burgerId}`,
    method: 'DELETE'
  }).then(response => {
    console.log(response);
    location.reload();
  });
});