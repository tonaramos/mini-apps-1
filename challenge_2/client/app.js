$(document).ready(function() {

  let string = 'this will be a CSV from the server';

  $('#fileDisplay').append(`<p>${string}</p>`);

let textInput = $("#textBoard").val();

//---------------AJAX requests 

  let httpRequest;

  let reqGet = function () {
    $.ajax({
      url:'/test', 
      type: 'GET',
      success: function (data) {
        $("#board").empty();
        $("#board").append(`<p>Change this with the response results</p>`)
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
      url: '/',
      data: JSON.stringify(data) ,
      contentType: 'application/json', 
      type: 'POST',
      success: function() {
        console.log('POST success log, data JSON.str->', JSON.stringify(data)) ;
      },
      error: function (jqXhr, textStatus, errorThrown ){
       console.log('POST error log, data JSON.stringify->', JSON.stringify(data));
      }
    });
  }

document.getElementById('button').addEventListener('click', ()=>{reqPost($("#textBoard").val())});



})












