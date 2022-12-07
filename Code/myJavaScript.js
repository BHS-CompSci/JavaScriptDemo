let element;
//Change the Name in the First Heading
let fullName = "Carl Walther";
let myTitle = "the Great";
let message = fullName + " " + myTitle;
element = document.getElementById("my-name");
element.textContent = message;

element = document.getElementById("greeting").getElementsByTagName("h2");
message = "<p> Hello, " + fullName + ". </br></br> Welcome back to your web page. </p>"

console.log(element);
element[0].innerHTML = message;