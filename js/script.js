var groceryList = [];
var upperList = [];
$(document).ready(function() {
  $("form#intake").submit(function(event){
    groceryList.push($("input#food").val());




    event.preventDefault();

    groceryList.sort();

    upperList = groceryList.map(function(item) {
      return item.toUpperCase();
    });

    console.log(upperList);
    //
    // $("#finished").submit(function(event){
    //   alert("hi");
    // upperList.forEach(function(listItem) {
    //   $("#list").append("<li>" + listItem + "</li>");
    //   $(".lists").show();
    //   $(".groceries").hide();
    //   event.preventDefault();
  });
  // });

  $("#finished").click(function(){
  upperList.forEach(function(listItem) {
    $("#list").append("<li>" + listItem + "</li>");
    $(".lists").show();
    $(".groceries").hide();

});
});
});
