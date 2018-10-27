/* global $ */
// Get references to page elements
const $apiText = $('#api-text');
const $apiCategory = $('#api-category');
const $apiDescription = $('#api-description');
const $apiURL = $('#api-URL');
const $apiAuthentication = $('#api-Authentication');
const $submitBtn = $('#submit');
const $apiList = $('#api-list');
const $apiovaerallrating = $('#api-OverallRating');
const $apiDocumentation = $('#api-Documentation');
const $apiEasy = $('#api-Easy');

// The API object contains methods for each kind of request we'll make
const API = {
  saveapi(api) {
    return $.ajax({
      headers: {
        'Content-Type': 'application/json',
      },
      type: 'POST',
      url: '/add',
      data: JSON.stringify(api),
    });
  },
  getapis() {
    return $.ajax({
      url: '/view',
      type: 'GET',
    });
  },
};

// refreshapis gets new apis from the db and repopulates the list
const refreshapis = () => {
  API.getapis().then((data) => {
    const $apis = data.map((api) => {
      const $a = $('<a>')
        .text(api.text)
        .attr('href', `/api/${api.id}`);

      const $li = $('<li>')
        .attr({
          class: 'list-group-item',
          'data-id': api.id,
        })
        .append($a);
      return $li;
    });

    $apiList.empty();
    $apiList.append($apis);
  });
};

// handleFormSubmit is called whenever we submit a new api
// Save the new api to the db and refresh the list
const handleFormSubmit = (event) => {
  event.preventDefault();

  const api = {
    text: $apiText.val().trim(),
    category: $apiCategory.val().trim(),
    description: $apiDescription.val().trim(),
    WebsiteURL: $apiURL.val().trim(),
    Authentication: $apiAuthentication.val().trim(),
    OverallRating: $apiovaerallrating.val().trim(),
    Documentation: $apiDocumentation.val().trim(),
    Easy: $apiEasy.val().trim(),
  };

  if (!(api.text && api.description)) {
    prompt('You must enter an api text and description!.....Modal is under construction' );
    return;
  }

  API.saveapi(api).then(() => {
    refreshapis();
  });

  $apiText.val('');
  $apiCategory.val('');
  $apiDescription.val('');
  $apiAuthentication.val('');
  $apiURL.val('');
  $apiovaerallrating.val('');
  $apiDocumentation.val('');
  $apiEasy.val('');
  alert('Thank you for adding API information.....Modal is under construction');
};

// Add event listeners to the submit and delete buttons
$submitBtn.on('click', handleFormSubmit);
