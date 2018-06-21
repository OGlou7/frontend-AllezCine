// age verification
// var agePrompt = prompt("What is your age?");

// function yourAge(){

// if (agePrompt>=18){ alert('Welcome!');
// } else {
// alert('Sorry! Come back in a few years!');
// document.location="https://www.imdb.com";
// };
// }
// if(agePrompt != null){
//   yourAge();
// }
// console.log(agePrompt);



// more movies
$ (document).ready(function(){
	$('.btnplus').click(function(){
		$('#collapseMore').toggle();

	});
});

// more tv shows
$ (document).ready(function(){
	$('.btnplus').click(function(){
		$('#collapseMoreTv').toggle();

	});
});

//buttons more
$(".btnplus").click(function() {
    if ($(this).text() == "Less") {
        $(this).text("More");
    } else {
        $(this).text("Less");
    };
});

//Bottom-up Arrow in pure Js
var button = document.createElement("button");
var lien = document.createElement("a");
var text = document.createElement("i");
text.setAttribute("class", "far fa-arrow-alt-circle-up");
text.setAttribute("style", "font-size: 40px");
lien.appendChild(text);
button.setAttribute("class", "btn float-right fixed-bottom");
button.setAttribute("style", "background-color: transparent;");
button.appendChild(lien);
lien.setAttribute("href", "#top")

var endFooter = document.getElementById("footer");
endFooter.insertAdjacentElement("beforeend", button);
