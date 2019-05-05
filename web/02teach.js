function change()
{
document.getElementById("button").innerHTML="Clicked!";
}

function change2()
{
var textboxColor = document.getElementById("textbox").innerHTML;
document.getElementById("div1").style.backgroundColor = textboxColor;
}