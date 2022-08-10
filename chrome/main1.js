// This version will use an ajax call to obtain a random image from the unsplash.api

let clientID = "SWLEVwRUpyzEsprgJwJVPKQ2WBb4WqY-2zklS6gsHcU";
let endpoint = `https://api.unsplash.com/photos/random/?client_id=${clientID}`;
const img = document.createElement("img");
$.ajax({
    method: `Get`,
    url: endpoint,
    success: function (result) {
        img.src = result.urls.regular;
    },
    error: function (err) {
        alert("Error retrieving data");
    }
});

const setBg = () => { //declaration of random color function for the text) 
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    textDiv.style.color = "#" + randomColor;
}

const textDiv = document.createElement("div"); // create constant div of type div
const text = document.createTextNode("\"When an action grows unprofitable, gather information; when information grows unprofitable, sleep.\" - Ursula K. Le Guin"); // create constant text with our added quote as the value using the .createTextNode method
textDiv.appendChild(text); // append text as a child to div using the .appendChild method
textDiv.classList.add("beautText"); // add the class that we have stored in our index.css file using the .classList method
textDiv.classList.add("center");

const skeleton = $("#home-page-skeleton"); // place the skeleton in a constant called skeleton
const ytd = $("ytd-app") // create a constant called ytd and set it equal to the tag name ytd-app.  Here we are using jquery
const contents = $("#content");
const ytdParent = ytd.parent();

ytd.remove();
contents.remove();
skeleton.remove(); // remove the unnecessary skeleton


ytdParent.prepend(img);

ytdParent.prepend(textDiv);

$("div").animate({
    paddingRight: "100px",
}, 3000, "linear");

$('div').click(function () { // when an element of type div is clicked, hide the text
    if (textDiv.style.display === "none") {
        textDiv.style.display = "block";
    } else {
        textDiv.style.display = "none";
    }
});

setInterval(function () { // every 5 seconds, bring the text back if style is none.
    if (textDiv.style.display === "none") {
        textDiv.style.display = "block";
    }
    setBg(); // call the random color change function
}, 4000)

img.onclick = function () {
    $.ajax({
        method: `Get`,
        url: endpoint,
        success: function (result) {
            img.src = result.urls.regular;
        },
        error: function (err) {
            alert("Error retrieving data");
        }
    });
}
