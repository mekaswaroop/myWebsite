var itemsArray = [];
var globalStr="";


$(document).ready(function(){
  $("#addItem").click(function(){
    var listTxt = $("#txtItem").val();
    if(listTxt=="" || listTxt=="Enter the item here")
    {
      alert("Please enter a value");
    }
    else
    {
      addItem();
    }


  });

  $("#txtItem").click(function(){
  $("#txtItem").val('');
  });


$( "body" ).delegate( ".delete", "click", function() {
  var deleteIndex = $(this).attr("indexOf");
  itemsArray.splice(deleteIndex,1);
  console.log(itemsArray.length);
  displayItems();

});

});


function addItem()
{
  var item = $("#txtItem").val();
  itemsArray.push(item);
  console.log(itemsArray.length);
  displayItems();
  $("#txtItem").val('');
}

function displayItems()
{
  str = "";
  if(itemsArray.length==0)
  {
    str="<b> Sorry, no items in list, please add items </b>";
  }
  else
  {
    for(i=0;i<itemsArray.length;i++)
    {
      str = str + "<div class='singleItem'>"+ itemsArray[i] +"<div class='delete' indexOf="+i+">[X]</div></div>";
    }
}

  $("#myList").html(str);
}

$("#delete").bind("click", function() {
  alert( "hi" );
});