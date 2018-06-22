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


// Video modal
$("#movie1").click(function(){
$("#myModal").modal({backdrop: false});
});

$("#movie2").click(function(){
$("#myModal2").modal({backdrop: false});
});

$("#movie3").click(function(){
$("#myModal3").modal({backdrop: false});
});

$("#movie4").click(function(){
$("#myModal4").modal({backdrop: false});
});

$("#movie5").click(function(){
$("#myModal5").modal({backdrop: false});
});

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
button.setAttribute("id", "btnArrow");
button.setAttribute("style", "background-color: transparent;");
button.appendChild(lien);
lien.setAttribute("href", "#top")

var endFooter = document.getElementById("footer");
endFooter.insertAdjacentElement("beforeend", button);

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("btnArrow").style.display= 'block';
    } else {
        document.getElementById("btnArrow").style.display = 'none';
    }
}

//pop up form
function myfunction() {
         var test1 = 'First Name: ' + document.getElementById("firstname").value;
         var test2 = 'Last Name: ' + document.getElementById("lastname").value;
         var test3 = 'Email: ' + document.getElementById("email").value;
				 var test4 = 'Subject: ' + document.getElementById("subject").value;
				 var test5 = 'Message: ' + document.getElementById("message").value;
         alert(test1 + '\n' + test2 + '\n' + test3 + '\n' + test4 + '\n' + test5);
       }


//COOKIE Alert
window.addEventListener("load", function(){
window.cookieconsent.initialise({
  "palette": {
    "popup": {
      "background": "#fb4446",
      "text": "#080000"
    },
    "button": {
      "background": "#fafafa"
    }
  },
  "theme": "classic",
  "type": "opt-out"
})}); 

