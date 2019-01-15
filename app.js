// JavaScript eller jQuery

$("<button>Login</button>").appendTo("body");

$("<div></div>").appendTo("body");
$("div").css({
  "background-color": "pink",
  "width": "300px",
  "height": "200px",
  "padding": "10px",
  "display": "none"
});

$("<h1 class='header'>Login</h1>").appendTo("div");
$(".header").css({
  "text-align": "center",
  "margin": "0 auto",
  "padding-top": "30px",
  "padding-bottom": "30px"
});

$("<form name='form'></form>").appendTo("div");

$("form").append("<input name='username'></input><input name='password' type='password'</input>");
$("input").css({
  "width": "100%",
  "height": "25px",
  "box-sizing": "border-box",
  "margin": "5px 0"
});

$("<button class='submit' type='submit'>Submit</button>").appendTo("div");
$(".submit").css({
  "width": "100%",
  "height": "25px",
  "box-sizing": "border-box",
  "margin": "5px 0"
});

document.getElementsByTagName("button")[0].addEventListener("click", loginFunction);
document.getElementsByTagName("button")[1].addEventListener("click", submitFunction);

function loginFunction() {
  var i = document.getElementsByTagName("div")[0];
  if (i.style.display === "none") {
    i.style.display = "block";
  } else {
    i.style.display = "none";
  }
}

function submitFunction() {
  let a = document.forms["form"]["username"].value;
  let b = document.forms["form"]["password"].value;
  if (a == "Steve" || a == "steve" && b == 123) {
    alert("Din email hämtas från servern");

    $("<h1>Email: </h1>").appendTo("body");

    $("<p></p>").appendTo("body");
    $("p").text(foo.email);
  } else {
    alert("oops fel, try again");
  }
}

var foo = null;
fetch("https://jsonplaceholder.typicode.com/users/1")
  .then(resp => resp.json())
  .then(obj => foo = obj);