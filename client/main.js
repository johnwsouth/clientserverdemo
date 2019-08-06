$(document).ready( startApp );


function startApp() {
  getData();
}

function getData(){
  var settings = {
    url: '../server/getnames.json',
    method: 'GET',
    dataType: 'json',
    success: handleDataFromServer

  }
  $.ajax(settings)
  var settings2 = {
    url: '../server/foodanage.json',
    method: 'GET',
    dataType: 'json',
    success: handleDataFromServer

  }
  $.ajax(settings2)
}

function handleDataFromServer (response){
  console.log( response );
}
