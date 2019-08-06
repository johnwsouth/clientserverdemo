$(document).ready( startApp );


function startApp() {
  getNameData();
  getFoodData();
}

function getNameData(){
  var nameSettings = {
    url: 'http://localhost:3001/names',
    method: 'GET',
    dataType: 'json',
    success: handleNameDataFromServer
  }
  $.ajax(nameSettings)
}

function getFoodData(){

  var foodSettings = {
    url: 'http://localhost:3001/favFoods',
    method: 'GET',
    dataType: 'json',
    success: handleFavFoodsDataFromServer
  }
  $.ajax(foodSettings);
}

function handleNameDataFromServer (response){
  console.log( "name data from server", response );
  for(var index = 0; index < response.length ; index++){
    var nameDiv = $("<div>").text(response[index].name)
    $("body").append(nameDiv)
  }
}

function handleFavFoodsDataFromServer (response){
  console.log("food data from server", response);
  for (var index = 0; index < response.length; index++) {
    var favFoodsDiv = $("<div>")
    var favFoodsAgeDiv = $("<div>").text(response[index].age);
    var favFoodsFoodDiv = $("<div>").text(response[index].food)
    favFoodsDiv.append(favFoodsAgeDiv,favFoodsFoodDiv);
    $("body").append(favFoodsDiv);
  }
}
