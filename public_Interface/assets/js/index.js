/* global $ */
// Get references to page elements
const $apiText = $('#api-text');
const $apiCategory = $('#api-category');
const $apiDescription = $('#api-description');
const $apiURL = $('#api-URL');
const $apiAuthentication = $('#api-Authentication');
const $submitBtn = $('#submit');
const $apiList = $('#api-list');

// The API object contains methods for each kind of request we'll make
const API = {
  saveapi(api) {
    return $.ajax({
      headers: {
        'Content-Type': 'application/json',
      },
      type: 'POST',
      url: 'api/apis',
      data: JSON.stringify(api),
    });
  },
  getapis() {
    return $.ajax({
      url: 'api/apis',
      type: 'GET',
    });
  },
  // deleteapi: function(id) {
  //   return $.ajax({
  //     url: "api/apis/" + id,
  //     type: "DELETE"
  //   });
  // }
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

      // const $button = $("<button>")
      //   .addClass("btn btn-danger float-right delete")
      //   .text("ｘ");

      // $li.append($button);

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
  };

  if (!(api.text && api.description)) {
    alert('You must enter an api text and description!');
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
};

// handleDeleteBtnClick is called when an api's delete button is clicked
// Remove the api from the db and refresh the list
// const handleDeleteBtnClick = function() {
//   const idToDelete = $(this)
//     .parent()
//     .attr("data-id");

//   API.deleteapi(idToDelete).then(function() {
//     refreshapis();
//   });
// };

// Add event listeners to the submit and delete buttons
$submitBtn.on('click', handleFormSubmit);
// $apiList.on("click", ".delete", handleDeleteBtnClick);
