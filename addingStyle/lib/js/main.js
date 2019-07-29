const rightsideElement = document.querySelector(".right_side");
var nameElement = document.querySelectorAll(".name");   //this apparently assigns arrays. huh makes sense for storing multiple things

rightsideElement.style.background = "#d3c26f";
for(var i = 0; i < nameElement.length; i++)
{
    nameElement[i].style.textShadow = "-6px 5px 2px yellow";
}