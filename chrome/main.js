//This version of the extension will alternate three photos every 4 seconds

const setBg = () => {
  //declaration of random color function for the text)
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  textDiv.style.color = "#" + randomColor;
  color.innerHTML = "# " + randomColor;
};

const img1 = document.createElement("img"); // create new constant img1 of type image using the .createElement method
img1.setAttribute(
  "src",
  "https://images.unsplash.com/photo-1508558936510-0af1e3cccbab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
);
const img2 = document.createElement("img"); // create new constant img1 of type image using the .createElement method
img2.setAttribute(
  "src",
  "https://images.unsplash.com/photo-1520371764250-8213f40bc3ed?ixlib=rb-1.2.1&w=1080&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb"
);
const img3 = document.createElement("img"); // create new constant img1 of type image using the .createElement method
img3.setAttribute(
  "src",
  "https://assets.entrepreneur.com/content/3x2/2000/20160226192037-succeed-adventure-sunrise-successful-man-top-mountain.jpeg?auto=webp&quality=95&crop=2000:1334&width=675"
);

const textDiv = document.createElement("div"); // create constant div of type div
const text = document.createTextNode(
  '"When an action grows unprofitable, gather information; when information grows unprofitable, sleep." - Ursula K. Le Guin'
); // create constant text with our added quote as the value using the .createTextNode method
textDiv.appendChild(text); // append text as a child to div using the .appendChild method
textDiv.classList.add("beautText"); // add the class that we have stored in our index.css file using the .classList method
textDiv.classList.add("center");

const skeleton = $("#home-page-skeleton"); // place the skeleton in a constant called skeleton
const ytd = $("ytd-app"); // create a constant called ytd and set it equal to the tag name ytd-app.  Here we are using jquery
const contents = $("#content");
const ytdParent = ytd.parent();

ytdParent.prepend(img3);
ytdParent.prepend(img2);
ytdParent.prepend(img1);

ytd.remove();
contents.remove();
skeleton.remove(); // remove the unnecessary skeleton

document.body.className += "color";

ytdParent.prepend(textDiv);

$("div").animate(
  {
    paddingRight: "95px",
  },
  3000,
  "linear"
);

$("div").click(function () {
  // when an element of type div is clicked, hide the text
  if (textDiv.style.display === "none") {
    textDiv.style.display = "block";
  } else {
    textDiv.style.display = "none";
  }
});

setInterval(function () {
  // every 5 seconds, bring the text back if style is none.
  if (textDiv.style.display === "none") {
    textDiv.style.display = "block";
  }
  setBg(); // call the random color change function
}, 4000);

const images = document.querySelectorAll("img"); // all image DOM elements are now assigned to the "images" constant.

//images.classList.add("center");
//images.classList.add("round");

let i = 0; // variable i = to 0

images[i].style.display = "block"; // display the first image by setting the style.display to block

//images.classList.add("center");

setInterval(function () {
  if (i == 0) {
    images[i].style.display = "block";
  } else if (i == images.length) {
    images[i - 1].style.display = "none";
    images[0].style.display = "block";
    i = 0;
    //return;
  } else {
    images[i - 1].style.display = "none";
    images[i].style.display = "block";
  }

  i++;
}, 4000);
