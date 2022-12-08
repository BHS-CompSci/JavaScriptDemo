let element;
//Change the Name in the First Heading
let fullName = "Carl Walther";
let myTitle = "the Great";
let message = fullName + " " + myTitle;
element = document.getElementById("my-name");
element.textContent = message;

//Add a Greatting
element = document.getElementById("greeting").getElementsByTagName("h2");
message = "<p> Hello, " + fullName + ". </br></br> Welcome back to your web page. </p>"

console.log(element);
element[0].innerHTML = message;

/*This is going to change the List*/
let birds = ["albatros","falmingo",'pidgon'];
let otherBirds = birds;

birds[1] = "crow";
console.log(birds[1]);
console.log(otherBirds[1]);
console.log(birds[2]);

element = document.getElementById("list").getElementsByTagName("li");
element[0].textContent = birds[0];
element[1].textContent = birds[1];
element[2].textContent = birds[2];


