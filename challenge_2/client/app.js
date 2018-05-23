$(document).ready(function() {

  let string = 'this will be a CSV from the server';

  $('#fileDisplay').append(`<p>${string}</p>`);

let textInput = $("#textBoard").val();

//---------------AJAX requests 

  let httpRequest;

  let reqGet = function (props) {
    $.ajax({
      url:'http://localhost:3000/lastInput', 
      type: 'GET',
      success: function (data) {
        console.log('success from ajax get');
        //$("#board").html(result)? 
      },
      error: function () {
        console.log('your ajax GET request failed');
      } 
    });
  }


  let reqPost = function (data) {
    $.ajax({
      url: 'http://localhost:3000/',
      data: JSON.stringify(data) ,
      contentType: 'application/json', 
      type: 'POST',
      success: function(response) {
      console.log('this is the response', response);// parse it
      $("#board").empty();
      $("#board").append("<p>" + response + "</p>")
      },
      error: function (jqXhr, textStatus, errorThrown ){
        console.log('this------error post');
      }
    });
  }

document.getElementById('button').addEventListener('click', ()=>{ reqPost( { value : $("#textBoard").val() }) });



})












